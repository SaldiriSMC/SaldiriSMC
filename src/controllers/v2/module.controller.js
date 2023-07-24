const { findOne } = require('../../models/v1/token.model');
const catchAsync = require('../../utils/catchAsync');
const { Tenant, Module } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');

const getModules = catchAsync(async (req, res) => {
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    const module = await Module.findAll({where:{tenantId:tenant.id}})
    if(module === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No module found');
    }
    response(res, module, "Get Modules successfully", 200)
});





module.exports = { getModules };
