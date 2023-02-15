const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const updateUser = require('./updateUser');
const refreshToken = require('./refreshToken');

module.exports = {
  register,
  login,
  logout,
  updateUser,
  refreshToken,
};
