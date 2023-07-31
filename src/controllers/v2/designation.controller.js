const catchAsync = require('../../utils/catchAsync');
const { Tenant, Designation } = require('../../models/v2/index');
const { response } = require('../../utils/response');
const ApiError = require('../../utils/ApiError');
const { Op } = require('sequelize');

const getDesignation = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  if (key) {
    const tenant = await Tenant.findOne({ where: { key: key } });
    const designation = await Designation.findAll({ where: { [Op.or]: [{ tenantId: tenant.id }, { tenantId: null }] } });
    if (designation === null) {
      throw new ApiError(httpStatus.NOT_FOUND, 'No designation found');
    }
    response(res, designation, 'Get departments successfully', 200);
  } else {
    const designation = await Designation.findAll({ where: { tenantId: null } });
    console.log('key majood nahi ha------------->>>>>>>');
    response(res, designation, 'Get designations successfully', 200);
  }
});

const createDesignation = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
  }
  const designation = await Designation.create({ designationName: req.body.designationName, tenantId: tenant.id });
  response(res, designation, 'Designation created successfully', 200);
});

const updateDesignation = catchAsync(async (req, res) => {
  const id = req.params.designationId;
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
  }
  const designation = await Designation.update(
    { designationName: req.body.designationName },
    {
      where: {
        id: id,
        tenantId: tenant.id,
      },
    }
  );
  response(res, designation, 'Designation updated successfully', 200);
});

const deleteDesignation = catchAsync(async (req, res) => {
  const id = req.params.designationId;
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
  }
  const designation = await Designation.destroy({ where: { id: id, tenantId: tenant.id } });
  response(res, designation, 'Designation deleted successfully', 200);
});

module.exports = { getDesignation, createDesignation, updateDesignation, deleteDesignation };
