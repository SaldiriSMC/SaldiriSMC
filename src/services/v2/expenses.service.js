const httpStatus = require('http-status');
const Model = require("../../models/v2/expenses.model")
const ApiError = require('../../utils/ApiError');

const create = async (userBody,tenantId) => {
  return Model.create({...userBody, tenantId:tenantId});  
};

const getById= async (id) => {
  const expenses = await Model.findOne({where:{ id:id }});
  return expenses
};

const updateById = async (updateBody,id) => {
  const expenses = await getById(id);
  if (!expenses) {
    throw new ApiError(httpStatus.NOT_FOUND, 'expenses not found');
  }else{
    const expenses = await Model.update(updateBody,{where:{id:id}})
    return expenses 
  }
};

const deleteById = async (id) => {
  const expenses  = await Model.findByPk(id);
  if (!expenses) {
    throw new ApiError(httpStatus.NOT_FOUND, 'expenses not found');
  }
  await expenses.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
