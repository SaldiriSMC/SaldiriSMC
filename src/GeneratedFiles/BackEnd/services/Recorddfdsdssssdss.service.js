const httpStatus = require('http-status');
const Model = require("../models/Recorddfdsdssssdss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Recorddfdsdssssdss = await Model.findOne({where:{ id:id }});
  return Recorddfdsdssssdss
};

const updateById = async (updateBody,id) => {
  const Recorddfdsdssssdss = await getById(id);
  if (!Recorddfdsdssssdss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recorddfdsdssssdss not found');
  }else{
    const Recorddfdsdssssdss = await Model.update(updateBody,{where:{id:id}})
    return Recorddfdsdssssdss 
  }
};

const deleteById = async (id) => {
  const Recorddfdsdssssdss  = await Model.findByPk(id);
  if (!Recorddfdsdssssdss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Recorddfdsdssssdss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
