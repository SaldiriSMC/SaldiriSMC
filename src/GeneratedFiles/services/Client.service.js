const httpStatus = require('http-status');
const Model = require("../models/Client.model.js")
const ApiError = require('../../utils/ApiError.js');

const create = async (userBody,tenantId) => {
  return Model.create(userBody);
};

const getById= async (id) => {
  const Client = await Model.findOne({where:{ id:id }});
  return Client
};

const updateById = async (updateBody,id) => {
  const Client = await getById(id);
  if (!Client) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
  }else{
    const Client = await Model.update(updateBody,{where:{id:id}})
    return Client 
  }
};

const deleteById = async (id) => {
  const Client  = await Model.findByPk(id);
  if (!Client ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await Client.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
