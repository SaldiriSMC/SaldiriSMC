const httpStatus = require('http-status');
const Model = require("../models/ssss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const ssss = await Model.findOne({where:{ id:id }});
  return ssss
};

const updateById = async (updateBody,id) => {
  const ssss = await getById(id);
  if (!ssss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ssss not found');
  }else{
    const ssss = await Model.update(updateBody,{where:{id:id}})
    return ssss 
  }
};

const deleteById = async (id) => {
  const ssss  = await Model.findByPk(id);
  if (!ssss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await ssss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
