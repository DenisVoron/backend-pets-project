const express = require('express');
const router = express.Router();
const { notices: ctrl } = require('../../controllers');
const {
    authentication,
    upload,
    ctrlWrapper,
    validateNoticeForm
} = require('../../middlewares');

router.post(
    "/notice",
    authentication,
    upload.single("avatar"),
    validateNoticeForm,
    ctrlWrapper(ctrl.addNotice)
);

module.exports = router;