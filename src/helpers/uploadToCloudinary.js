const cloudinary = require('cloudinary').v2;
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
  secure: true,
});

const uploadToCloudinary = async path => {
  try {
    const result = await cloudinary.uploader.upload(path);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = uploadToCloudinary;
