const catchAsync = require('../../utils/catchAsync');
const { Tenant, Designation } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');

const getDesignation = catchAsync(async (req, res) => {
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    const designation = await Designation.findAll({where:{tenantId:tenant.id}})
    response(res, designation, "Get designations successfully", 200)
});





module.exports = { getDesignation };
