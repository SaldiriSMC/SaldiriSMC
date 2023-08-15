
const httpStatus = require('http-status');
const Model = require("../models/Recordss.model.js")
const ApiError = require('../../utils/ApiError.js');
const catchAsync = require('../../utils/catchAsync.js');
const RecordssService  = require('../services/Recordss.service.js');
const { Tenant } = require("../../../models/v2/index.js")
const { pagination } = require("../../../utils/pagination.js")
const { response } = require('../../../utils/response.js');

const create = catchAsync(async (req, res) => {
  try {
      const Recordss = await RecordssService.create(req.body);
      if (Recordss) {
        response(res,  Recordss , 'Recordss created succesfully', httpStatus.CREATED);
      }else{
        response(res,  "" , 'Recordss not created succesfully', 400);
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
  const doc = await RecordssService.getById(id)
  if (!doc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(doc);
}); 

const update = catchAsync(async (req, res) => {
  await RecordssService.updateById(req.body, req.params.userId.toString());
  response(res, '', 'Recordss updated successfully', 200);
});

const del = catchAsync(async (req, res) => {
  await RecordssService.deleteById(req.params.userId);
  response(res, '', 'Recordss deleted successfully', 200);
});

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  del,
};
