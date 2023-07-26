const nodemailer = require('nodemailer');
const config = require('../../config/config');
const logger = require('../../config/logger');
const { EmailTemplate, Tenant, Department, Designation } = require('../../models/v2/index');

const transport = nodemailer.createTransport(config.email.smtp);
/* istanbul ignore next */
if (config.env !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, text };
  await transport.sendMail(msg);
};

const sendHtmlTemplateEmail = async (to, subject, text) => {
  const msg = { from: config.email.from, to, subject, html: text };
  await transport.sendMail(msg);
};

/**
 * Send reset password email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `http://saldir.s3-website-us-east-1.amazonaws.com/chanagePassword/?token=${token}`;
  const text = `Dear user,
  To reset your password, click on this link: ${resetPasswordUrl}
  If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

const sendInviteEmail = async (tokenArray, user) => {
  const tenant = await Tenant.findOne({ where: { id: user.tenantId } });
  const department = await Department.findOne({ where: { id: user.departmentId } });
  const designation = await Designation.findOne({ where: { id: user.designationId } });
  const emailTemplate = await EmailTemplate.findOne({ where: { subject: 'Reset Password' } });
  if (emailTemplate) {
    const subject = emailTemplate.subject;
    tokenArray.map(async (item) => {
      const resetPasswordUrl = `http://saldir.s3-website-us-east-1.amazonaws.com/chanagePassword/?token=${item.token}`;
      const text = emailTemplate.body
        .replace(/#FullName/g, user.name)
        .replace(/#CompanyName/g, tenant.tanantName)
        .replace(/#Domain/g, tenant.domain)
        .replace(/#ResetPasswordLink/g, resetPasswordUrl)
        .replace(/#Department/g, department.departmentName)
        .replace(/#Designation/g, designation.designationName);
      await sendHtmlTemplateEmail(item.email, subject, text);
    });
  }
};
const sendTemplateEmail = async (user) => {
  const emailArray = [{ id: user.id, email: user.email }];
  const tenant = await Tenant.findOne({ where: { id: user.tenantId } });
  const department = await Department.findOne({ where: { id: user.departmentId } });
  const designation = await Designation.findOne({ where: { id: user.designationId } });
  const emailTemplate = await EmailTemplate.findOne({ where: { subject: 'Invitation' } });
  if (emailTemplate) {
    const subject = emailTemplate.subject;
    const text = emailTemplate.body
      .replace(/#FullName/g, user.name)
      .replace(/#CompanyName/g, tenant.tanantName)
      .replace(/#Domain/g, tenant.domain)
      .replace(/#Department/g, department.departmentName)
      .replace(/#Designation/g, designation.designationName);
    emailArray.map(async (item) => {
      await sendHtmlTemplateEmail(item.email, subject, text);
    });
  }
};

/**
 * Send verification email
 * @param {string} to
 * @param {string} token
 * @returns {Promise}
 */
const sendVerificationEmail = async (to, token) => {
  const subject = 'Email Verification';
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendInviteEmail,
  sendVerificationEmail,
  sendTemplateEmail,
};
