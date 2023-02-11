const multer = require('multer');

const multerConfig = multer.diskStorage({
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
