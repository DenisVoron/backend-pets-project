const Joi = require("joi");

const titleRegExp = /^.{2,48}$/;
const noticeNameRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]{2,16}$/;
const dataRegExp = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/;
const noticeBreedRegExp = /^[a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії\s]{2,24}$/;
const locationRegExp =
    /^[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії\-]+,\s?[A-ZА-ЯЁАЩЬЮЯҐЄІЇ][a-zA-Zа-яёА-ЯЁА-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;
const noticePriceRegExp = /^[1-9]{1}\d*$/;
const commentsRegExp = /^(.|\n){8,120}$/;


const sex = ["male", "female"];

const titleError = new Error("Title not valid. Any letters min 2 max 48");
const nameError = new Error("Name not valid. Any letters min 2 max 16");
const birthdateError = new Error("Birthdate not valid. Date in the ISO format 2023-02-11T13:07:49");
const breedError = new Error("Breed not valid. Any letters min 2 max 24");
const locationError = new Error(
    "Location not valid. String in City, Region format."
);
const commentsError = new Error(
    "Comments not valid. Any letters and symbols. min 8, max 120"
);
const sexError = new Error("Sex not valid. Male or female");
const priceError = new Error(
    "Price not valid. A number that must not start with 0"
);


const joiNoticeForms = Joi.object({
    category: Joi.string(),
    title: Joi.string().pattern(titleRegExp).error(titleError).required(),
    name: Joi.string().pattern(noticeNameRegExp).error(nameError),
    birthdate: Joi.string().pattern(dataRegExp).error(birthdateError),
    breed: Joi.string().pattern(noticeBreedRegExp).error(breedError),
    location: Joi.string().pattern(locationRegExp).error(locationError),
    comments: Joi.string()
        .pattern(commentsRegExp)
        .error(commentsError)
        .required(),
    sex: Joi.string()
        .valid(...sex)
        .error(sexError)
        .required(),
});

const joiNoticeFormsSell = Joi.object({
    category: Joi.string(),
    title: Joi.string().pattern(titleRegExp).error(titleError).required(),
    name: Joi.string().pattern(noticeNameRegExp).error(nameError),
    birthdate: Joi.string().pattern(dataRegExp).error(birthdateError),
    breed: Joi.string().pattern(noticeBreedRegExp).error(breedError),
    location: Joi.string().pattern(locationRegExp).error(locationError),
    price: Joi.string().pattern(noticePriceRegExp).error(priceError).required(),
    comments: Joi.string()
        .pattern(commentsRegExp)
        .error(commentsError)
        .required(),
    sex: Joi.string()
        .valid(...sex)
        .error(sexError)
        .required(),
});

module.exports = {
    joiNoticeForms,
    joiNoticeFormsSell,
};
