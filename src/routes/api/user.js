const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/users');

const { validation, authentication, ctrlWrapper, upload } = require('../../middlewares');

const { joiSchema } = require('../../models/pet');

router.get('/current', authentication, ctrlWrapper(ctrl.currentPet));

router.post(
  '/add',
  authentication,
  upload.single('photoUrl'),
  validation(joiSchema),
  ctrlWrapper(ctrl.addPet)
);

router.delete('/:Id', authentication, ctrlWrapper(ctrl.removePet));

module.exports = router;