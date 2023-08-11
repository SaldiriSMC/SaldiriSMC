const httpStatus = require('http-status');
const Model = require("../models/ali.model.js")
const ApiError = require('../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const ali = await Model.findOne({where:{ id:id }});
  return ali
};

const updateById = async (updateBody,id) => {
  const ali = await getById(id);
  if (!ali) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ali not found');
  }else{
    const ali = await Model.update(updateBody,{where:{id:id}})
    return ali 
  }
};

const deleteById = async (id) => {
  const ali  = await Model.findByPk(id);
  if (!ali ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await ali.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
