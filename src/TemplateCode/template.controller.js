const fs = require('fs');
const path = require('path');
const controller = `const httpStatus = require('http-status');
const Model = require("../models/#_tablename.model.js")
const ApiError = require('../../utils/ApiError.js');
const catchAsync = require('../../utils/catchAsync.js');
const #_tablenameService  = require('../services/#_tablename.service.js');
const { Tenant } = require("../../models/v2/index.js")
const { pagination } = require("../../utils/pagination.js")
const { response } = require('../../utils/response.js');

const create = catchAsync(async (req, res) => {
  try {
      const #_tablename = await #_tablenameService.create(req.body);
      if (#_tablename) {
        response(res,  #_tablename , '#_tablename created succesfully', httpStatus.CREATED);
      }else{
        response(res,  "" , '#_tablename not created succesfully', 400);
      }
  } catch (err) {
    console.log(err);
  }
});

const getAll = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  const result = await pagination(req, tenant.id, Model)
  res.send(result);
});

const getSingle = catchAsync(async (req, res) => {
  const id = req.params.userId;
  const doc = await #_tablenameService.getById(id)
  if (!doc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(doc);
}); 

const update = catchAsync(async (req, res) => {
  await #_tablenameService.updateById(req.body, req.params.userId.toString());
  response(res, '', '#_tablename updated successfully', 200);
});

const del = catchAsync(async (req, res) => {
  await #_tablenameService.deleteById(req.params.userId);
  response(res, '', '#_tablename deleted successfully', 200);
});

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  del,
};
`;

const generateController = async (tableName) => {
  const replacedController = controller.replace(/#_tablename/g, tableName);
  const absolutePath = path.resolve(__dirname, '..');
  fs.writeFile(
    `${absolutePath}/GeneratedFiles/controllers/${tableName}.controller.js`,
    replacedController,
    'utf-8',
    (err) => {
      if (err) {
        console.log('controller err--------->>>>', err);
      } else {
        console.log('controller file generated successfully');
      }
    }
  );
};

module.exports = { generateController };
