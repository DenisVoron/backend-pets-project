const { Conflict } = require('http-errors');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
  const { name, email, phone, city, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  await User.create({
    name,
    email,
    phone,
    city,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        name,
        email,
        phone,
        city,
        avatarURL,
      },
    },
  });
};

module.exports = register;
