const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const currentUser = async (req, res) => {
    const { _id } = req.user;

    const userList = await User.findById(_id);

    if (!userList) {
        throw HttpError(401, 'Unauthorized');
    };

    res.status(200).json({userList});
    
};

module.exports = currentUser;