const httpStatus = require('http-status');
const Model = require("../../models/v2/carList.model")
const ApiError = require('../../utils/ApiError');

const create = async (userBody,tenantId) => {
  console.log("userBody------>>>", userBody)
  return Model.create({...userBody, tenantId:tenantId});  
};

const getById= async (id) => {
  const carList = await Model.findOne({where:{ id:id }});
  return carList
};

const updateById = async (updateBody,id) => {
  const carList = await getById(id);
  if (!carList) {
    throw new ApiError(httpStatus.NOT_FOUND, 'carList not found');
  }else{
    const carList = await Model.update(updateBody,{where:{id:id}})
    return carList 
  }
};

const deleteById = async (id) => {
  const carList  = await Model.findByPk(id);
  if (!carList ) {
    throw new ApiError(httpStatus.NOT_FOUND, 'carList not found');
  }
  await carList.destroy();
};


module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
