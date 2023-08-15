const httpStatus = require('http-status');
const Model = require("../models/Recorddfsssdss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Recorddfsssdss = await Model.findOne({where:{ id:id }});
  return Recorddfsssdss
};

const updateById = async (updateBody,id) => {
  const Recorddfsssdss = await getById(id);
  if (!Recorddfsssdss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recorddfsssdss not found');
  }else{
    const Recorddfsssdss = await Model.update(updateBody,{where:{id:id}})
    return Recorddfsssdss 
  }
};

const deleteById = async (id) => {
  const Recorddfsssdss  = await Model.findByPk(id);
  if (!Recorddfsssdss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Recorddfsssdss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
