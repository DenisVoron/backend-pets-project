const express = require('express');
const { services: ctrl } = require('../../controllers/');
const { ctrlWrapper } = require('../../middlewares');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getServices));

module.exports = router;
