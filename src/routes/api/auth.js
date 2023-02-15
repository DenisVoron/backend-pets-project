const express = require('express');
const { auth: ctrl } = require('../../controllers');
const {
  authentication,
  upload,
  validation,
  ctrlWrapper,
} = require('../../middlewares');
const {
  joiRegisterSchema,
  joiLoginSchema,
  updateUserSchema,
  joiRefreshSchema,
} = require('../../models/user');

const router = express.Router();

router.post(
  '/register',
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);

router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post('/logout', authentication, ctrlWrapper(ctrl.logout));

router.patch(
  '/update',
  authentication,
  upload.single('avatar'),
  validation(updateUserSchema),
  ctrlWrapper(ctrl.updateUser)
);

router.post(
  '/refresh',
  validation(joiRefreshSchema),
  ctrlWrapper(ctrl.refreshToken)
);

router.post('/verification', ctrlWrapper(ctrl.verificationEmail));

module.exports = router;
