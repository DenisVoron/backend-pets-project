const { Pet } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');


const addPet = async (req, res) => {
  const { _id } = req.user;
  
    if (req.file) {
        const {path, fieldname, filename} = req.file;
        const {url: photoPet} = await uploadToCloudinary(path, fieldname, filename);

        const result = await Pet.create({...req.body, photoPet, owner: _id});

        return res.status(201).json({
            message: 'Pet added',
            pet: result
        });
    };

    const result = await Pet.create({...req.body, owner: _id});
    
    res.status(201).json({
        message: 'Pet added',
        pet: result
    });
};

module.exports = addPet;