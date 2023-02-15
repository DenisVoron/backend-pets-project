const jwt = require('jsonwebtoken');
const { ACCESS_JWT_SECRET, REFRESH_JWT_SECRET } = process.env;

const tokenCreating = payload => {
  const accessToken = jwt.sign(payload, ACCESS_JWT_SECRET, {
    expiresIn: '12h',
  });

  const refreshToken = jwt.sign(payload, REFRESH_JWT_SECRET, {
    expiresIn: '24h',
  });

  return { accessToken, refreshToken };
};

module.exports = tokenCreating;
