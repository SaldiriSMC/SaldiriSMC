const catchAsync = require('../../utils/catchAsync');
const { EmailTemplate, Tenant } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');
const { tokenService, emailService } = require('../../services/v2');

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

const sendEmail = catchAsync(async (req, res) => {
    const emailArray = req.body.users
    const resetPasswordTokenArray = await tokenService.generateEmailIvitationToken(emailArray);
    await emailService.sendInviteEmail(resetPasswordTokenArray);
    response(res , "" , "Invite email send successfully" , 200)
});

const updateEmailTemplate = catchAsync(async (req, res) => {
    const id = req.params.emailTemplateId
    const key = req.get('X-Tenent-Key');
    const tenant = await Tenant.findOne({ where: { key: key } });
    const emailTemplate = await EmailTemplate.update({subject:req.body.subject, body:req.body.body}, {where:{
        id:id, tenantId:tenant.id
    }})
    response(res, emailTemplate, "Email templates updated successfully", 200)
});

const deleteEmailTemplate = catchAsync(async (req, res) => {
    const id = req.params.emailTemplateId
    const key = req.get('X-Tenent-Key');
    const tenant = await Tenant.findOne({ where: { key: key } });
    const emailTemplate = await EmailTemplate.destroy({where:{id:id, tenantId:tenant.id}})
    response(res, emailTemplate, "Email templates deleted successfully", 200)
});





module.exports = { getEmailTempate, createEmailTemplate, sendEmail, updateEmailTemplate, deleteEmailTemplate };
