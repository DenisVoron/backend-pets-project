const { Schema, model } = require('mongoose');
const Joi = require('joi');

const regexp = /^[a-z ,.'-]+$/i;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    photoPet: {
      type: String,
      default:
        'https://us.123rf.com/450wm/naddya/naddya1701/naddya170100029/naddya170100029.jpg?ver=6',
    },
    comments: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().pattern(regexp).required(),
  birthday: Joi.string().required(),
  breed: Joi.string().pattern(regexp).required(),
  photoPet: Joi.string(),
  comments: Joi.string().min(10).max(100).required(),
});

const Pet = model('pet', petSchema);

module.exports = {
  Pet,
  joiSchema,
};
