const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const config = require('../../config/config');
const userService = require('../v2/user.service');
const { Token } = require('../../models/v2');
const ApiError = require('../../utils/ApiError');
const { tokenTypes } = require('../../config/tokens');

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret = config.jwt.secret) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

/**
 * Save a token
 * @param {string} token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {boolean} [blacklisted]
 * @returns {Promise<Token>}
 */
const saveToken = async (token, refreshToken, userId, expires, type, blacklisted = false) => {
  console.log("type------->>>>>>>", )
  await Token.destroy({where:{ user: userId, type:type}});
  const tokenDoc = await Token.create({
    token:token,
    refreshToken:refreshToken,
    user: userId,
    expires: expires.toDate(),
    type:type,
    blacklisted,
  });
  return tokenDoc;
};
/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
const verifyToken = async (token,refreshToken, type) => {
  let tokenDoc;
  if(token){
    const payload = jwt.verify(token, config.jwt.secret);
    tokenDoc = await Token.findOne({where:{ token:token, type:type, user: payload.sub, blacklisted: false }});
  }else{
    const payload = jwt.verify(refreshToken, config.jwt.secret);
    tokenDoc = await Token.findOne({where:{ refreshToken:refreshToken, type:type, user: payload.sub, blacklisted: false }});
  }
  if (!tokenDoc) {
    throw new Error('Token not found');

  }
  return tokenDoc;
};

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken(user.id, accessTokenExpires, tokenTypes.ACCESS);
  const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH);
  await saveToken(accessToken, refreshToken, user.id, refreshTokenExpires, tokenTypes.AUTH);
  return {
    access: {
      token: accessToken,
      refreshToken:refreshToken,
      expires: accessTokenExpires.toDate(),
    },
  };
};

/**
 * Generate reset password token
 * @param {string} email
 * @returns {Promise<string>}
 */
const generateResetPasswordToken = async (email) => {
  const user = await userService.getUserByEmail(email);
  console.log("user------>", user)
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No users found with this email');
  }
  const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes');
  const resetPasswordToken = generateToken(user.id, expires, tokenTypes.RESET_PASSWORD);
  console.log("resetPasswordToken------->>>>>>>", resetPasswordToken)
  await saveToken(resetPasswordToken, "", user.id, expires, tokenTypes.RESET_PASSWORD);
  return resetPasswordToken;
};

const generateEmailIvitationToken = async (emailArray) => {
  const emailInvitationTokenArray = []
  emailArray.map(async(item) => {
    const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes');
    const emailInvitationToken= generateToken(item.id, expires, tokenTypes.RESET_PASSWORD);
    saveToken(emailInvitationToken, item.id, expires, tokenTypes.RESET_PASSWORD);
    emailInvitationTokenArray.push({token: emailInvitationToken, email: item.email});
  })
  return emailInvitationTokenArray
};

/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
const generateVerifyEmailToken = async (user) => {
  const expires = moment().add(config.jwt.verifyEmailExpirationMinutes, 'minutes');
  const verifyEmailToken = generateToken(user.id, expires, tokenTypes.VERIFY_EMAIL);
  await saveToken(verifyEmailToken, user.id, expires, tokenTypes.VERIFY_EMAIL);
  return verifyEmailToken;
};

module.exports = {
  generateToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
  generateResetPasswordToken,
  generateEmailIvitationToken,
  generateVerifyEmailToken,
};
