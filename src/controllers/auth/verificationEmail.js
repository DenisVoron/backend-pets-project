const { Conflict } = require('http-errors');
const { User } = require('../../models');

const verificationEmail = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (user) {
        throw new Conflict('Email in use');
    }

    res.status(200).json({ email });
}

module.exports = verificationEmail;