const ctrlWrapper = require('./ctrlWrapper');
const validation = require('./validation');
const authentication = require('./authentication');
const upload = require('./upload');
const validateNoticeForm = require('./validateNoticeForm');

module.exports = {
  validation,
  ctrlWrapper,
  authentication,
  upload,
  validateNoticeForm
};
