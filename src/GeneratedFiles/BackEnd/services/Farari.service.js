const httpStatus = require('http-status');
const Model = require("../models/Farari.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Farari = await Model.findOne({where:{ id:id }});
  return Farari
};

const updateById = async (updateBody,id) => {
  const Farari = await getById(id);
  if (!Farari) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Farari not found');
  }else{
    const Farari = await Model.update(updateBody,{where:{id:id}})
    return Farari 
  }
};

const deleteById = async (id) => {
  const Farari  = await Model.findByPk(id);
  if (!Farari ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Farari.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
