const Joi = require('joi');

const passRegexp = /^(?=.{7,32})([\S])*$/;
const nameRegexp = /^(?=.{2,16}$)([A-Za-z])*$/;
const phoneRegexp = /((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/;
const cityRegexp = /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/;
const emailRegexp = /.+@([a-zA-Z]+\.)+[a-zA-z]{2,3}/;
const birthdayRegExp =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
const regexp = /^[a-z ,.'-]+$/i;

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

const joiRefreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp),
  email: Joi.string().email().pattern(emailRegexp),
  birthday: Joi.string().pattern(birthdayRegExp),
  phone: Joi.string().pattern(phoneRegexp),
  city: Joi.string().pattern(cityRegexp),
  avatarURL: Joi.string(),
});

const joiSchema = Joi.object({
  name: Joi.string().pattern(regexp).required(),
  birthday: Joi.string().required(),
  breed: Joi.string().pattern(regexp).required(),
  photoPet: Joi.string(),
  comments: Joi.string().min(10).max(100).required(),
});

module.exports = {
  joiRegisterSchema,
  joiLoginSchema,
  updateUserSchema,
  joiRefreshSchema,
  joiSchema,
};
