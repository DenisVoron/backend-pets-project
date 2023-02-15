const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { NotFound } = require('http-errors');
const { tokenCreating } = require('../../helpers');

const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env;

const refreshToken = async (req, res) => {
  const { refreshToken: token } = req.body;

  const { id } = jwt.verify(token, REFRESH_JWT_SECRET);
  const user = await User.findOne({ id });
  if (!user) {
    throw new NotFound(`User with id=${id} not found`);
  }
  const payload = { id };

  const { accessToken, refreshToken } = tokenCreating(payload);

  //   const accessToken = jwt.sign(payload, ACCESS_JWT_SECRET, {
  //     expiresIn: '2m',
  //   });

  //   const refreshToken = jwt.sign(payload, REFRESH_JWT_SECRET, {
  //     expiresIn: '4m',
  //   });

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

  //   try {
  //     const { id } = jwt.verify(token, REFRESH_JWT_SECRET);
  //     const user = await User.findOne({ id });
  //     if (!user) {
  //       throw new NotFound(`User with id=${id} not found`);
  //     }
  //     const payload = { id };

  //     const accessToken = jwt.sign(payload, ACCESS_JWT_SECRET, {
  //       expiresIn: '2m',
  //     });

  //     const refreshToken = jwt.sign(payload, REFRESH_JWT_SECRET, {
  //       expiresIn: '4m',
  //     });

  //     const result = await User.findByIdAndUpdate(
  //       id,
  //       { accessToken, refreshToken },
  //       { new: true }
  //     );

  //     res.json({
  //       status: 'success',
  //       code: 200,
  //       accessToken,
  //       refreshToken,
  //       data: { result },
  //     });
  //   } catch (error) {
  //     throw new Forbidden('jwt expired');
  //   }
};

module.exports = refreshToken;
