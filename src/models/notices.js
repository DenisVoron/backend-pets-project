const { Schema, SchemaTypes, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const noticeSchema = new Schema(
  {
    category: {
      type: String,
      enum: ['sell', 'lostfound', 'ingoodhands'],
      required: [true, 'Notice type is required'],
    },
    title: {
      type: String,
      minLength: 2,
      maxLength: 48,
      required: [true, 'Set title for notice'],
    },
    name: {
      type: String,
      minLength: 2,
      maxLength: 16,
      default: null,
    },
    birthdate: {
      type: Date,
      default: null,
    },
    breed: {
      type: String,
      minLength: 2,
      maxLength: 24,
      default: null,
    },
    sex: {
      type: String,
      enum: ['male', 'female'],
      required: [true, 'The sex is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
    },
    price: {
      type: Number,
      default: null,
    },
    avatar: {
      public_id: { type: String, default: null },
      url: { type: String, default: null },
    },
    comments: {
      type: String,
      minLength: 8,
      maxLength: 120,
      required: [true, 'Comments is required'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },

  { versionKey: false, timestamps: true }
);

noticeSchema.post('save', handleMongooseError);

const Notice = model('notice', noticeSchema);

module.exports = { Notice };
