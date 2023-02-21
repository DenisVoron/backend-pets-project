const express = require('express');
const router = express.Router();

const ctrl = require('../../controllers/users');

const { authentication, ctrlWrapper } = require('../../middlewares');

router.get('/user/current', authentication, ctrlWrapper(ctrl.currentUser));

module.exports = router;
