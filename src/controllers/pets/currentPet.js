const { Pet } = require('../../models');
const { HttpError } = require('../../helpers');

const currentPet = async (req, res) => {
  const { _id } = req.user;

  const userPetsList = await Pet.find({
    owner: _id,
  });

    res.status(200).json({userPetsList});
};

module.exports = currentPet;