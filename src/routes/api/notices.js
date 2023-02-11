const express = require('express');
const router = express.Router();

const { notices: ctrl } = require('../../controllers/');
const {
  authentication,
  validation,
  ctrlWrapper,
} = require('../../middlewares');
const { joiNoticeSchema } = require('../../models/notices');

router.get('/:category', ctrlWrapper(ctrl.getNoticesByCategory));
router.get('/id/:id', ctrlWrapper(ctrl.getNoticeById));
router.patch(
  '/favorite/:id',
  authentication,
  ctrlWrapper(ctrl.addFavoriteNotice)
);

module.exports = router;
