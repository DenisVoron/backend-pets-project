const { User } = require('../../models');
const { NotFound } = require('http-errors');

const removeFavoriteNotice = async (req, res) => {
  const { _id, favorite } = req.user;
  const { id } = req.params;

  if (!favorite.includes(id)) {
    throw new NotFound(`the notice ID = ${id} is not in the list of favorites`);
  }

  const user = await User.findByIdAndUpdate(
    _id,
    { $pull: { favorite: id } },
    {
      new: true,
    }
  );
  if (!user) {
    throw new NotFound();
  }

  res.status(200).json({
    id,
    message: `notice id = ${id} deleted from favorite`,
  });
};

module.exports = removeFavoriteNotice;
