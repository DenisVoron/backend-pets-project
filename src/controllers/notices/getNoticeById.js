const { NotFound } = require('http-errors');
const { Notice } = require('../../models');
const { User } = require('../../models');

const getNoticeById = async (req, res) => {
  const { id } = req.params;
  const notice = await Notice.findById(id);
  if (!notice) {
    throw new NotFound(`Notice with id=${id} not found`);
  }

  const userId = notice.owner;
  const user = await User.findById(userId);

  res.json({
    status: 'success',
    code: 200,
    data: {
      notice,
      user,
    },
  });
};

module.exports = getNoticeById;
