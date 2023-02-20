const Joi = require('joi');

const regexp = /^[a-z ,.'-]+$/i;


const joiPetSchema = Joi.object({
  name: Joi.string().pattern(regexp).required(),
  birthday: Joi.string().required(),
  breed: Joi.string().pattern(regexp).required(),
  photoPet: Joi.string(),
  comments: Joi.string().min(10).max(100).required(),
});

module.exports = joiPetSchema