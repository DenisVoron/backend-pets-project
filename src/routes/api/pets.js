const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/pets');

const { validation, authentication, ctrlWrapper, upload } = require('../../middlewares');

const { joiSchema } = require('../../models/pet');

router.get('/pet/current', authentication, ctrlWrapper(ctrl.currentPet));


router.post(
  '/pet/add',
  authentication,
  upload.single('photoPet'),
  validation(joiSchema),
  ctrlWrapper(ctrl.addPet)
);

router.delete('/pet/:Id', authentication, ctrlWrapper(ctrl.removePet));

module.exports = router;