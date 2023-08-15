const httpStatus = require('http-status');
const Model = require("../models/Recordss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Recordss = await Model.findOne({where:{ id:id }});
  return Recordss
};

const updateById = async (updateBody,id) => {
  const Recordss = await getById(id);
  if (!Recordss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recordss not found');
  }else{
    const Recordss = await Model.update(updateBody,{where:{id:id}})
    return Recordss 
  }
};

const deleteById = async (id) => {
  const Recordss  = await Model.findByPk(id);
  if (!Recordss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Recordss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
