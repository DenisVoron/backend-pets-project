const { User } = require('../../models');
const { Notice } = require('../../models');

const filterResponse = [
    "title",
    "breed",
    "location",
    "birthdate",
    "avatar",
    "category",
    "owner",
];

const getUserFavorites = async (req, res) => {

    const { favorite } = await User.findById(req.user._id);

    const notices = await Notice.find({ _id: favorite }, filterResponse).sort({
        _id: -1,
    });

    res.status(200).json(notices);
};

module.exports = getUserFavorites;