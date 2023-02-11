const { Schema, model } = require('mongoose');
const Joi = require('joi');

const noticeSchema = Schema(
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
    birthday: {
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
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
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

const joiNoticeSchema = Joi.object({
  category: Joi.string().valid('sell', 'lostfound', 'ingoodhands').required(),
  title: Joi.string().min(2).max(48).required(),
  name: Joi.string().min(2).max(16),
  birthday: Joi.string(),
  breed: Joi.string().min(2).max(24),
  sex: Joi.string().valid('male', 'female').required(),
  location: Joi.string().required(),
  price: Joi.number(),
  avatar: Joi.string(),
  comments: Joi.string().min(8).max(120),
});

const Notice = model('notice', noticeSchema);

module.exports = {
  Notice,
  joiNoticeSchema,
};
