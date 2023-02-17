const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { NotFound } = require('http-errors');
const { tokenCreating } = require('../../helpers');

const { REFRESH_JWT_SECRET } = process.env;

const refreshToken = async (req, res) => {
  const { refreshToken: token } = req.body;

  const { id } = jwt.verify(token, REFRESH_JWT_SECRET);
  const user = await User.findOne({ id });
  if (!user) {
    throw new NotFound(`User with id=${id} not found`);
  }
  const payload = { id };

  const { accessToken, refreshToken } = tokenCreating(payload);

  const result = await User.findByIdAndUpdate(
    id,
    { accessToken, refreshToken },
    { new: true }
  );

  res.json({
    status: 'success',
    code: 200,
    accessToken,
    refreshToken,
    data: { result },
  });
};

module.exports = refreshToken;
