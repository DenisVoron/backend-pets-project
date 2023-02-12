const { Schema, model } = require('mongoose');
const Joi = require('joi');

const passRegexp = /^(?=.{7,32})([\S])*$/;
const nameRegexp = /^(?=.{2,16}$)([A-Za-z])*$/;
const phoneRegexp = /((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/;
// /^\+38(0\d{9})$/; phoneRegex without " - "
const cityRegexp = /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/;
const emailRegexp =
  /^(?=.{7,63}$)(([0-9A-Za-z]{2,})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/;
const birthdayRegExp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;

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
      match: emailRegexp,
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
      match: birthdayRegExp,
    },
    avatarURL: {
      type: String,
    },
    token: {
      type: String,
      default: null,
    },
    favorite: [{ type: Schema.Types.ObjectId, ref: 'notice' }],
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  password: Joi.string().pattern(passRegexp).required(),
  email: Joi.string().email().pattern(emailRegexp).required(),
  name: Joi.string().pattern(nameRegexp).required(),
  city: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().pattern(passRegexp).required(),
  email: Joi.string().email().pattern(emailRegexp).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp),
  email: Joi.string().email().pattern(emailRegexp),
  birthday: Joi.string().pattern(birthdayRegExp),
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
