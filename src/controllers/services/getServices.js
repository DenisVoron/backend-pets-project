const { Services } = require('../../models');

const getServices = async (req, res) => {
  const services = await Services.find();
  res.status(200).json(services);
};

module.exports = getServices;
