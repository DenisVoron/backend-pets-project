const { Notice } = require('../../models');
const { uploadToCloudinary } = require('../../helpers');

// додає оголошення
const addNotice = async (req, res) => {
    const owner = req.user._id;

    const {
        category,
        title,
        name,
        birthdate,
        breed,
        comments,
        price,
        sex,
        location,
    } = req.body;

    const newNotice = new Notice({
        category,
        title,
        name,
        birthdate,
        breed,
        comments,
        sex,
        location,
        owner,
    });

    category === "sell" ? (newNotice.price = price) : (newNotice.price = null);

    if (req.file) {
        const avatar = await uploadToCloudinary(req.file.path);

        newNotice.avatar = avatar;
    }

    const result = await Notice.create(newNotice);

    res.status(201).json(result);
};

module.exports = addNotice;