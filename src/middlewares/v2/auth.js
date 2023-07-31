const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const { roleRights } = require('../../config/roles');
const { Token } = require('../../models/v2/index');

const verifyCallback = (req, resolve, reject, requiredRights) => async (err, user, info) => {
  const authToken = req.headers.authorization.split(' ')[1];
  const token = await Token.findOne({ where: { token: authToken } });
  if(token === null){
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  if (err || info || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }else{
    resolve();
  }
};

const auth = (...requiredRights) => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject, requiredRights))(req, res, next)})
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
