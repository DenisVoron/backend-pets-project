const getNoticesByCategory = require('./getNoticesByCategory');
const getNoticeById = require('./getNoticeById');
const addFavoriteNotice = require('./addFavoriteNotice');
const addNotice = require('./addNotice');
const getUserFavorites = require('./getUserFavorites');

module.exports = {
  getNoticesByCategory,
  getNoticeById,
  addFavoriteNotice,
  addNotice,
  getUserFavorites
};
