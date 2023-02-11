const { User } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { avatarURL, name, email, birthday, phone, city } = req.body;

  if (req.file) {
    const avatar = await uploadToCloudinary(req.file.path);
    try {
      const result = await User.findByIdAndUpdate(
        req.user._id,
        { avatarURL: avatar.secure_url },
        { new: true }
      );
      res.json({ result });
    } catch (error) {
      throw error;
    }
  } else {
    const result = await User.findByIdAndUpdate(
      _id,
      {
        avatarURL,
        name,
        email,
        birthday,
        phone,
        city,
      },
      { new: true }
    );

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  }
};

module.exports = updateUser;
