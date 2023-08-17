const service = `const httpStatus = require('http-status');
const Model = require("../../models/v2/#_tablename.model")
const ApiError = require('../../utils/ApiError');

const create = async (userBody,tenantId) => {
  return Model.create({...userBody, tenantId:tenantId});  
};

const getById= async (id) => {
  const #_tablename = await Model.findOne({where:{ id:id }});
  return #_tablename
};

const updateById = async (updateBody,id) => {
  const #_tablename = await getById(id);
  if (!#_tablename) {
    throw new ApiError(httpStatus.NOT_FOUND, '#_tablename not found');
  }else{
    const #_tablename = await Model.update(updateBody,{where:{id:id}})
    return #_tablename 
  }
};

const deleteById = async (id) => {
  const #_tablename  = await Model.findByPk(id);
  if (!#_tablename) {
    throw new ApiError(httpStatus.NOT_FOUND, '#_tablename not found');
  }
  await #_tablename.destroy();
};

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
};
`;

const generateService = async (tableName, zip) => {
  const replacedService = service.replace(/#_tablename/g, tableName);
  zip.folder('services').file(`${tableName}.service.js`, replacedService);
};

module.exports = { generateService };
