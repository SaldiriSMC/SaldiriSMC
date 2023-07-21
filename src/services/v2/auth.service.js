const httpStatus = require('http-status');
const tokenService = require('./token.service');
const userService = require('./user.service');
const Token = require('../../models/v2/token.model');
const ApiError = require('../../utils/ApiError');
const { tokenTypes } = require('../../config/tokens');
const User = require('../../models/v2/user.model')

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || user.password != password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

/**
 * Logout
 * @param {string} refreshToken
 * @returns {Promise}
 */
const logout = async (refreshToken) => {
  const refreshTokenDoc = await Token.findOne({where:{ refreshToken: refreshToken, type: tokenTypes.AUTH, blacklisted: false }});
    if (!refreshTokenDoc) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Token Not found');
    }
  return refreshTokenDoc
};

/**
 * Refresh auth tokens
 * @param {string} refreshToken
 * @returns {Promise<Object>}
 */
const refreshAuth = async (refreshToken) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(null, refreshToken, tokenTypes.AUTH);
    const user = await userService.getUserById(refreshTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.destroy();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }
};

/**
 * Reset password
 * @param {string} resetPasswordToken
 * @param {string} newPassword
 * @returns {Promise}
 */
const resetPassword = async (resetPasswordToken, newPassword) => {
  try {
    const resetPasswordTokenDoc = await tokenService.verifyToken(resetPasswordToken, null, tokenTypes.RESET_PASSWORD);
    const user = await userService.getUserById(resetPasswordTokenDoc.user);
    console.log("user------->>>>", user)
    if (!user) {
      throw new Error();
    }
    await User.update({password:newPassword, isSignedIn:true},{where:{id:user.id}})
    const update = await Token.destroy({where:{ user: user.id, type:tokenTypes.RESET_PASSWORD}});
    if(update){
      return {message:"Password reset successfully"}
    }
  } catch (error) {
    console.log(error)
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password reset failed');
  }
};

/**
 * Verify email
 * @param {string} verifyEmailToken
 * @returns {Promise}
 */
const verifyEmail = async (verifyEmailToken) => {
  try{
    const verifyEmailTokenDoc = await tokenService.verifyToken(verifyEmailToken, null, tokenTypes.VERIFY_EMAIL);
    const user = await userService.getUserById(verifyEmailTokenDoc.user);
    if (!user) {
      throw new Error();
    }
    await Token.destroy({where:{ user: user.id, type: tokenTypes.VERIFY_EMAIL }});
    const update = await User.update({ isEmailVerified: true },{where:{id:user.id}})
    if(update){
      return {message: "email verified successfully"}
    }
  }catch (error) {
    console.log(error)
    throw new ApiError(httpStatus.UNAUTHORIZED, 'email verification failed');
  }
};

module.exports = {
  loginUserWithEmailAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
};
