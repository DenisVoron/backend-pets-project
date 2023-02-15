const { Notice } = require('../../models');
const { NotFound } = require('http-errors');

const getNoticesByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;

  const allNotices = await Notice.find({ category });
  const totalPages = Math.ceil(allNotices.length / limit);

  if (totalPages < page) {
    throw new NotFound('Page with this number does not exist');
  }

  const result = await Notice.find({ category }, '', {
    skip,
    limit: Number(limit),
  });

  if (!result) {
    throw new NotFound();
  }

  res.json({ page: Number(page), totalPages, result });
};

module.exports = getNoticesByCategory;
