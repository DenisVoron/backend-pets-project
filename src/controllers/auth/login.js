const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const { tokenCreating } = require('../../helpers');

const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized('Email is wrong');
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized('Password is wrong');
  }
  const payload = {
    id: user._id,
  };

  const { accessToken, refreshToken } = tokenCreating(payload);

  // const accessToken = jwt.sign(payload, ACCESS_JWT_SECRET, {
  //   expiresIn: '2m',
  // });

  // const refreshToken = jwt.sign(payload, REFRESH_JWT_SECRET, {
  //   expiresIn: '4m',
  // });

  const result = await User.findByIdAndUpdate(
    user._id,
    { accessToken, refreshToken },
    { new: true }
  );
  res.json({
    status: 'success',
    code: 200,
    accessToken,
    refreshToken,
    data: {
      result,
    },
  });
};

module.exports = login;
