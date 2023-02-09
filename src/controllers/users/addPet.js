const { Pet } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');

const addPet = async (req, res, next) => {
  const { _id } = req.user;
  const { photo } = req.body;

  if (photo) {
    req.body.petPhoto = await uploadToCloudinary(avatarURL, 'petsPhotos', 320, 320);
  }

  const result = await Pet.create({ ...req.body, owner: _id });

  res.status(201).json({
    status: 'Pet added',
    code: 201,
    result,
  });
};

module.exports = addPet;