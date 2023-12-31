const catchAsync = require('../../utils/catchAsync');
const { Tenant, Department } = require('../../models/v2/index');
const { response } = require('../../utils/response');
const ApiError = require('../../utils/ApiError');
const { pagination } = require('../../utils/pagination');
const getDepartments = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  if (key) {
    const tenant = await Tenant.findOne({ where: { key: key } });
    const result = await pagination(req, tenant.id, Department);
    response(res, result, 'Get departments successfully', 200);
  } else {
    const department = await Department.findAll({ where: { tenantId: null } });
    response(res, department, 'Get departments successfully', 200);
  }
});

const createDepartment = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
  }
  const department = await Department.create({ departmentName: req.body.departmentName, tenantId: tenant.id });
  response(res, department, 'Department created successfully', 200);
});

const updateDepartment = catchAsync(async (req, res) => {
  const id = req.params.departmentId;
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
  }
  const department = await Department.update(
    { departmentName: req.body.departmentName },
    {
      where: {
        id: id,
        tenantId: tenant.id,
      },
    }
  );
  response(res, department, 'Department updated successfully', 200);
});

const deleteDepartment = catchAsync(async (req, res) => {
  const id = req.params.departmentId;
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
  }
  const deparment = await Department.destroy({ where: { id: id, tenantId: tenant.id } });
  response(res, deparment, 'Deparment deleted successfully', 200);
});

module.exports = { getDepartments, createDepartment, updateDepartment, deleteDepartment };
