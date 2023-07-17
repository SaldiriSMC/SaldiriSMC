const catchAsync = require('../../utils/catchAsync');
const { EmailTemplate } = require("../../models/v2/index")
const { response } = require("../../utils/response")
const ApiError = require('../../utils/ApiError');

const getEmailTempate = catchAsync(async (req, res) => {
    const emailTemplate = await EmailTemplate.findAll()
    response(res, emailTemplate, "Get email templates successfully", 200)
});

const createEmailTemplate = catchAsync(async (req, res) => {
    const emailTemplate = await EmailTemplate.create(req.body)
    response(res, emailTemplate, "Email templates created successfully", 200)
});

const updateEmailTemplate = catchAsync(async (req, res) => {
    // const emailTemplate = await EmailTemplate.create(req.body)
    // response(res, emailTemplate, "Email templates created successfully", 200)
});

const deleteEmailTemplate = catchAsync(async (req, res) => {
    const emailTemplate = await EmailTemplate.create(req.body)
    response(res, emailTemplate, "Email templates created successfully", 200)
});





module.exports = { getEmailTempate, createEmailTemplate, updateEmailTemplate, deleteEmailTemplate };
