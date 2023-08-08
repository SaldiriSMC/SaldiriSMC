const catchAsync = require('../../utils/catchAsync');
const { Tenant, Department } = require('../../models/v2/index');
const { response } = require('../../utils/response');
const ApiError = require('../../utils/ApiError');
const { pagination } = require('../../utils/pagination');
const { sequelize } = require('../../config/mySqlConnection');
const getTables = catchAsync(async (req, res) => {
  const [results, metadata] = await sequelize.query('SHOW TABLES');
  console.log(results);
  res.send(results);
});

const createTable = catchAsync(async (req, res) => {
  let queryField = '';
  req.body.columnArray.map((item) => {
    queryField += `${item?.columnName} ${item.dataType},`;
  });
  queryField = queryField.slice(0, queryField.length - 1);
  let query = `CREATE TABLE ${req.body.tableName} (${queryField})`;
  const [results, metadata] = await sequelize.query(query);
  console.log(results);
  res.send(results);
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

module.exports = { getTables, createTable, updateDepartment, deleteDepartment };
