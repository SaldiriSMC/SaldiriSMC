const nodemailer = require('nodemailer');
const config = require('../../config/config');
const logger = require('../../config/logger');
const emailTemplate = require('../../models/v2/emailTemplates.module');

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
  const msg = { from: config.email.from, to, subject, html:text };
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
  const resetPasswordUrl = `http://localhost:3000/chanagePassword/?token=${token}`;
  const text = `Dear user,
  To reset your password, click on this link: ${resetPasswordUrl}
  If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

const sendInviteEmail = async (tokenArray) => {
  const subject = 'Invitation';
  // replace this url with the link to the reset password page of your front-end app
  tokenArray.map(async (item) =>{
    const resetPasswordUrl = `http://localhost:3000/chanagePassword/?token=${item.token}`;
    const text = ` Congratulations! To get onboard with Saldiri SMC PVT LTD (company name) in 
    #Department as a #Designation. you are requested to get signup on our official portal by
    clicking here. Signing up to the Saldiri website is very important for further support, operations
    and official documentation. You are requested to contact the HR department for any queries you
    may have.

    To reset your password, click on this link: ${resetPasswordUrl}
    If you did not request any password resets, then ignore this email.

    We wish you best of luck and a bright future with our company.

  
    Regards,
    Management,
    #CompanyName
`;
    await sendEmail(item.email, subject, text);
  })
};
const sendTemplateEmail = async (tokenArray) => {
  let template = await emailTemplate.findOne({where:{id:9}})
  const subject = template.subject;
  // replace this url with the link to the reset password page of your front-end app
  tokenArray.map(async (item) =>{
    const customizedTemplate = template.body
  .replace(/{{name}}/g, "safyan")
  .replace(/{{company}}/g, "saldir smc");
    const text = template.body
    await sendHtmlTemplateEmail(item.email, subject, customizedTemplate);
  })
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
  sendTemplateEmail
};
