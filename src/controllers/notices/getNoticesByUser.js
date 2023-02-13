const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getNoticesByUser = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Notice.find({ owner });

  if (!result) {
    throw new NotFound('user has no ads ');
  }

  res.json(result);
};

module.exports = getNoticesByUser;
