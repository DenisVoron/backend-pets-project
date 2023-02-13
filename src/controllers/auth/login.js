const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized('Email is wrong');
  }
  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized('Password is wrong');
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  const result = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true }
  );
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = login;
