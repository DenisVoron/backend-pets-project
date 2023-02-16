const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getNoticeByKeyword = async (req, res) => {
  const { keyword = '' } = req.query;

  const result = await Notice.find({ $text: { $search: keyword } });

  if (result.length === 0) {
    throw new NotFound('there are not notices with this keyword ');
  }

  res.json({ result });
};

module.exports = getNoticeByKeyword;
