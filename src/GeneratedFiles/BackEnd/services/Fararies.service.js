const httpStatus = require('http-status');
const Model = require("../models/Fararies.model.js")
const ApiError = require('../../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Fararies = await Model.findOne({where:{ id:id }});
  return Fararies
};

const updateById = async (updateBody,id) => {
  const Fararies = await getById(id);
  if (!Fararies) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Fararies not found');
  }else{
    const Fararies = await Model.update(updateBody,{where:{id:id}})
    return Fararies 
  }
};

const deleteById = async (id) => {
  const Fararies  = await Model.findByPk(id);
  if (!Fararies ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Fararies.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
