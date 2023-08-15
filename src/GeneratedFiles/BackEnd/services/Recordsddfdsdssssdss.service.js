const httpStatus = require('http-status');
const Model = require("../models/Recordsddfdsdssssdss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Recordsddfdsdssssdss = await Model.findOne({where:{ id:id }});
  return Recordsddfdsdssssdss
};

const updateById = async (updateBody,id) => {
  const Recordsddfdsdssssdss = await getById(id);
  if (!Recordsddfdsdssssdss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recordsddfdsdssssdss not found');
  }else{
    const Recordsddfdsdssssdss = await Model.update(updateBody,{where:{id:id}})
    return Recordsddfdsdssssdss 
  }
};

const deleteById = async (id) => {
  const Recordsddfdsdssssdss  = await Model.findByPk(id);
  if (!Recordsddfdsdssssdss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Recordsddfdsdssssdss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
