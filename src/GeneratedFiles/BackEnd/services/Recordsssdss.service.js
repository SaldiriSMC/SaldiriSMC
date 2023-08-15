const httpStatus = require('http-status');
const Model = require("../models/Recordsssdss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Recordsssdss = await Model.findOne({where:{ id:id }});
  return Recordsssdss
};

const updateById = async (updateBody,id) => {
  const Recordsssdss = await getById(id);
  if (!Recordsssdss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recordsssdss not found');
  }else{
    const Recordsssdss = await Model.update(updateBody,{where:{id:id}})
    return Recordsssdss 
  }
};

const deleteById = async (id) => {
  const Recordsssdss  = await Model.findByPk(id);
  if (!Recordsssdss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Recordsssdss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
