const getNoticesByCategory = require('./getNoticesByCategory');
const getNoticeById = require('./getNoticeById');
const addFavoriteNotice = require('./addFavoriteNotice');
const addNotice = require('./addNotice');
const removeFavoriteNotice = require('./removeFavoriteNotice');

module.exports = {
  getNoticesByCategory,
  getNoticeById,
  addFavoriteNotice,
  addNotice,
  removeFavoriteNotice,
};
