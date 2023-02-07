const { Schema, model } = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));

const passRegexp = /^(?=.{7,32}$)([0-9A-Za-z])*$/;
const nameRegexp = /^(?=.{2,16}$)([A-Za-z])*$/;
const phoneRegexp = /((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/;
// /^\+38(0\d{9})$/; phoneRegex without " - "
const cityRegexp = /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      match: passRegexp,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    name: {
      type: String,
      match: nameRegexp,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      match: phoneRegexp,
    },
    birthday: {
      type: String,
    },
    avatarURL: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  password: Joi.string().pattern(passRegexp).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  name: Joi.string().pattern(nameRegexp).required(),
  city: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().pattern(passRegexp).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp),
  email: Joi.string().email({ minDomainSegments: 2 }).min(7),
  birthday: Joi.date().format('DD.MM.YYYY').utc(),
  phone: Joi.string().pattern(phoneRegexp),
  city: Joi.string().pattern(cityRegexp),
  avatarURL: Joi.string(),
});

const User = model('user', userSchema);

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
  updateUserSchema,
};
