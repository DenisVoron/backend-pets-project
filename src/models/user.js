const { Schema, model } = require('mongoose');

const passRegexp = /^(?=.{7,32})([\S])*$/;
const nameRegexp = /^(?=.{2,16}$)([A-Za-z])*$/;
const phoneRegexp = /((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/;
const cityRegexp = /^([A-Za-z]+)([,][ ][A-Za-z]+)*$/;
const emailRegexp = /.+@([a-zA-Z]+\.)+[a-zA-z]{2,3}/;
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
      default: '01.01.1900',
    },
    avatarURL: {
      type: String,
    },
    accessToken: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    favorite: [{ type: Schema.Types.ObjectId, ref: 'notice' }],
  },
  { versionKey: false, timestamps: true }
);

const User = model('user', userSchema);

module.exports = {
  User,
};
