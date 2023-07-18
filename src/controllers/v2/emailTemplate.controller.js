const catchAsync = require('../../utils/catchAsync');
const { EmailTemplate, Tenant } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');
const { where } = require('../../models/v1/token.model');

const getEmailTempate = catchAsync(async (req, res) => {
    const key = req.get('X-Tenent-Key');
    const tenant = await Tenant.findOne({ where: { key: key } });
    const emailTemplate = await EmailTemplate.findAll({where:{tenantId:tenant.id}})
    response(res, emailTemplate, "Get email templates successfully", 200)
});

const createEmailTemplate = catchAsync(async (req, res) => {
    const key = req.get('X-Tenent-Key');
    const tenant = await Tenant.findOne({ where: { key: key } });
    const emailTemplate = await EmailTemplate.create({...req.body, tenantId:tenant.id})
    response(res, emailTemplate, "Email templates created successfully", 200)
});

const updateEmailTemplate = catchAsync(async (req, res) => {
    const id = req.params
    console.log("id------->>>>>>",id)
    const key = req.get('X-Tenent-Key');
    const tenant = await Tenant.findOne({ where: { key: key } });
    // const emailTemplate = await EmailTemplate.update({subject:req.body.subject, body:req.body.body}, where:{
    //     id:id
    // })
    // const emailTemplate = await EmailTemplate.create(req.body)
    // response(res, emailTemplate, "Email templates created successfully", 200)
});

const deleteEmailTemplate = catchAsync(async (req, res) => {
    const emailTemplate = await EmailTemplate.create(req.body)
    response(res, emailTemplate, "Email templates created successfully", 200)
});





module.exports = { getEmailTempate, createEmailTemplate, updateEmailTemplate, deleteEmailTemplate };
