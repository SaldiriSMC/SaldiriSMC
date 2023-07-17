const { findOne } = require('../../models/v1/token.model');
const catchAsync = require('../../utils/catchAsync');
const { Tenant, Department } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');

const getDepartments = catchAsync(async (req, res) => {
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    const department = await Department.findAll({where:{tenantId:tenant.id}})
    if(department === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No deparment found');
    }
    response(res, department, "Get departments successfully", 200)
});





module.exports = { getDepartments };
