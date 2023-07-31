const { findOne } = require('../../models/v1/token.model');
const catchAsync = require('../../utils/catchAsync');
const { Tenant, Statuse } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');

const getStatuses = catchAsync(async (req, res) => {
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    let status;
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    if(req.query.Module_Id){
        status = await Statuse.findAll({where:{moduleId:req.query.Module_Id, tenantId:tenant.id}})
    }else{
        status = await Statuse.findAll({where:{tenantId:tenant.id}})
    }
    if(status === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No status found');
    }
    response(res, status, "Get status successfully", 200)
});

const createStatus = catchAsync(async (req, res) => {
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    const status = await Statuse.create({statusName: req.body.statusName, moduleId:req.body.moduleId, tenantId:tenant.id})
    response(res, status, "Status created successfully", 200)
});

const updateStatus = catchAsync(async (req, res) => {
    const id = req.params.statusId
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    const status = await Statuse.update({statusName:req.body.statusName}, {where:{
        id:id, tenantId:tenant.id
    }})
    response(res, status, "Status updated successfully", 200)
});

const deleteStatus = catchAsync(async (req, res) => {
    const id = req.params.statusId
    const key = req.get("X-Tenent-Key")
    const tenant = await Tenant.findOne({where:{key:key}})
    if(tenant === null){
        throw new ApiError(httpStatus.NOT_FOUND, 'No tenant found');
    }
    const status = await Statuse.destroy({where:{id:id, tenantId:tenant.id}})
    response(res, status, "Status deleted successfully", 200)
});





module.exports = { getStatuses, createStatus, updateStatus, deleteStatus };
