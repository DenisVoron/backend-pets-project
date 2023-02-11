const { User } = require('../../models');
const { Conflict, NotFound } = require('http-errors');

const addFavoriteNotice = async (req, res) => {
  const { _id, favorite } = req.user;
  const { id } = req.params;

  if (favorite.includes(id)) {
    throw new Conflict('this notice is already in favorites');
  }

  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { favorite: id } },
    { new: true }
  );
  if (!user) {
    throw new NotFound();
  }

  res.status(201).json({
    favorite: user.favorite,
    message: 'notice add to favorite',
  });
};

module.exports = addFavoriteNotice;
