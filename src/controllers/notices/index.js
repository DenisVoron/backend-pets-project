const getNoticesByCategory = require('./getNoticesByCategory');
const getNoticeById = require('./getNoticeById');
const addFavoriteNotice = require('./addFavoriteNotice');
const addNotice = require('./addNotice');
const removeFavoriteNotice = require('./removeFavoriteNotice');
const getNoticesByUser = require('./getNoticesByUser');
const removeUserNotice = require('./removeUserNotice');

module.exports = {
  getNoticesByCategory,
  getNoticeById,
  addFavoriteNotice,
  addNotice,
  removeFavoriteNotice,
  getNoticesByUser,
  removeUserNotice,
};
