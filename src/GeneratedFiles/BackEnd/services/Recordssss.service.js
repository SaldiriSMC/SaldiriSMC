const httpStatus = require('http-status');
const Model = require("../models/Recordssss.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Recordssss = await Model.findOne({where:{ id:id }});
  return Recordssss
};

const updateById = async (updateBody,id) => {
  const Recordssss = await getById(id);
  if (!Recordssss) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Recordssss not found');
  }else{
    const Recordssss = await Model.update(updateBody,{where:{id:id}})
    return Recordssss 
  }
};

const deleteById = async (id) => {
  const Recordssss  = await Model.findByPk(id);
  if (!Recordssss ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Recordssss.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
