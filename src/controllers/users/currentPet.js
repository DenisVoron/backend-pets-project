const { Pet } = require('../../models');

const currentPet = async (req, res) => {
  const { email, name, address, phone, _id } = req.user;

  const userPetsList = await Pet.find({
    owner: _id,
  });

  res.json({
    email,
    name,
    address,
    phone,
    userPetsList,
  });
};

module.exports = currentPet;