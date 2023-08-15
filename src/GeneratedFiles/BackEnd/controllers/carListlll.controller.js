
const httpStatus = require('http-status');
const Model = require("../models/carListlll.model.js")
const ApiError = require('../../utils/ApiError.js');
const catchAsync = require('../../utils/catchAsync.js');
const carListlllService  = require('../services/carListlll.service.js');
const { Tenant } = require("../../../models/v2/index.js")
const { pagination } = require("../../../utils/pagination.js")
const { response } = require('../../../utils/response.js');

const create = catchAsync(async (req, res) => {
  try {
      const carListlll = await carListlllService.create(req.body);
      if (carListlll) {
        response(res,  carListlll , 'carListlll created succesfully', httpStatus.CREATED);
      }else{
        response(res,  "" , 'carListlll not created succesfully', 400);
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
  const doc = await carListlllService.getById(id)
  if (!doc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(doc);
}); 

const update = catchAsync(async (req, res) => {
  await carListlllService.updateById(req.body, req.params.userId.toString());
  response(res, '', 'carListlll updated successfully', 200);
});

const del = catchAsync(async (req, res) => {
  await carListlllService.deleteById(req.params.userId);
  response(res, '', 'carListlll deleted successfully', 200);
});

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  del,
};
