const { Notice } = require('../../models');
const { User } = require('../../models');
const { NotFound } = require('http-errors');

const removeUserNotice = async (req, res) => {
  const { _id: owner, favorite } = req.user;
  const { id: noticeId } = req.params;

  const result = await Notice.findOneAndRemove({
    owner,
    _id: noticeId,
  });

  if (!result) {
    throw new NotFound(`User with id=${owner} no notice with id=${noticeId}`);
  }
  if (favorite.includes(noticeId)) {
    await User.findByIdAndUpdate(
      { _id: owner },
      { $pull: { favorite: noticeId } },
      {
        new: true,
      }
    );
  }

  res
    .status(200)
    .json({ id: noticeId, message: `notice id=${noticeId} deleted` });
};

module.exports = removeUserNotice;
