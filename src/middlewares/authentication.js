const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { ACCESS_JWT_SECRET } = process.env;

const authentication = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  try {
    if (bearer !== 'Bearer') {
      throw new Unauthorized('Not authorized');
    }
    const { id } = jwt.verify(token, ACCESS_JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.accessToken || token !== String(user.accessToken)) {
      throw new Unauthorized('Not authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'Invalid sugnature') {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = authentication;
