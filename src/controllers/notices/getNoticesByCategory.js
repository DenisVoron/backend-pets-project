const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getNoticesByCategory = async (req, res) => {
  const { category } = req.params;
  const result = await Notice.find({ category });
  if (!result) {
    throw new NotFound();
  }
  res.json(result);
};

module.exports = getNoticesByCategory;
