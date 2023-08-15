const httpStatus = require('http-status');
const Model = require("../models/carListlll.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const carListlll = await Model.findOne({where:{ id:id }});
  return carListlll
};

const updateById = async (updateBody,id) => {
  const carListlll = await getById(id);
  if (!carListlll) {
    throw new ApiError(httpStatus.NOT_FOUND, 'carListlll not found');
  }else{
    const carListlll = await Model.update(updateBody,{where:{id:id}})
    return carListlll 
  }
};

const deleteById = async (id) => {
  const carListlll  = await Model.findByPk(id);
  if (!carListlll ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await carListlll.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
