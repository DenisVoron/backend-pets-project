const { HttpError } = require('../../helpers');
const { Pet } = require('../../models');

const removePet = async (req, res, next) => {
  const { Id } = req.params;

  const result = await Pet.findByIdAndRemove(Id);

  if (!result) {
    throw HttpError(404, 'Notice not found');
  }

  res.json({
    status: 'No Content',
    code: 204,
    result,
  });
};

module.exports = removePet;