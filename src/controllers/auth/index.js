const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const updateUser = require('./updateUser');
const verificationEmail = require('./verificationEmail');
// const getCurrent = require('./getCurrent');

module.exports = {
  register,
  login,
  logout,
  updateUser,
  verificationEmail,
  // getCurrent,
};
