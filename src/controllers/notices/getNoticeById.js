const { NotFound } = require('http-errors');
const { Notice } = require('../../models');

const getNoticeById = async (req, res) => {
  const { id } = req.params;
  const result = await Notice.findById(id);
  if (!result) {
    throw new NotFound(`Notice with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getNoticeById;
