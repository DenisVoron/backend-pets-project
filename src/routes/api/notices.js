const express = require('express');
const router = express.Router();

const { notices: ctrl } = require('../../controllers');

// const { joiNoticeSchema } = require('../../models/notices');

const {
    authentication,
    upload,
    ctrlWrapper,
    validateNoticeForm
} = require('../../middlewares');

router.get('/:category', ctrlWrapper(ctrl.getNoticesByCategory));
router.get('/id/:id', ctrlWrapper(ctrl.getNoticeById));
router.patch(
  '/favorite/:id',
  authentication,
  ctrlWrapper(ctrl.addFavoriteNotice)
);

router.post(
    "/notice",
    authentication,
    upload.single("avatar"),
    validateNoticeForm,
    ctrlWrapper(ctrl.addNotice)
);

module.exports = router;

