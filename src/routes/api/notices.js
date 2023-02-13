const express = require('express');
const router = express.Router();

const { notices: ctrl } = require('../../controllers');
const {
  authentication,
  upload,
  ctrlWrapper,
  validateNoticeForm,
} = require('../../middlewares');

router.get('/:category', ctrlWrapper(ctrl.getNoticesByCategory));

router.get('/id/:id', ctrlWrapper(ctrl.getNoticeById));

router.patch(
  '/favorite/:id',
  authentication,
  ctrlWrapper(ctrl.addFavoriteNotice)
);

router.delete(
  '/favorite/:id',
  authentication,
  ctrlWrapper(ctrl.removeFavoriteNotice)
);

router.post(
  '/notice',
  authentication,
  upload.single('avatar'),
  validateNoticeForm,
  ctrlWrapper(ctrl.addNotice)
);

router.get('/user/ads', authentication, ctrlWrapper(ctrl.getNoticesByUser));
router.delete('/user/:id', authentication, ctrlWrapper(ctrl.removeUserNotice));

module.exports = router;
