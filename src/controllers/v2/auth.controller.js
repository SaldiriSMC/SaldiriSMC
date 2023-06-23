const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { User, Tenant } = require('../../models/v2/index');
const { authService, userService, tokenService, emailService, tenantService } = require('../../services/v2');
const {response} = require("../../utils/response")

const register = catchAsync(async (req, res) => {
  try {
    const alias = await Tenant.findOne({ where: { alias: req.body.alias } });
    const isEmail = await User.findOne({ where: { email: req.body.email } });
    if (isEmail === null) {
      if (alias === null) {
        if(req.body.type === "user"){
          response(res, "", 'No tenant found agaist this alias', httpStatus.BAD_REQUEST)
        }
        const tenant = await tenantService.createTenant(req.body, res);
        if (tenant) {
          const user = await userService.createUser(req.body, tenant.id);
          if (user) {
            const tokens = await tokenService.generateAuthTokens(user);
            response(res, { tenant, user, tokens }, 'User created successfully', httpStatus.CREATED)
          }
        }
      } else {
        if(req.body.type === "company"){
          response(res, "", 'Alias already taken', httpStatus.BAD_REQUEST)
        }
        const user = await userService.createUser(req.body, alias.id, 'user');
        if (user) {
          const tokens = await tokenService.generateAuthTokens(user);
          response(res, { user, tokens }, 'User created successfully', httpStatus.CREATED)
        }
      }
    }else {
      response(res, "", 'Email already taken', httpStatus.BAD_REQUEST)
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tenant = await Tenant.findOne({where:{id:user.tenantId}})
  const tokens = await tokenService.generateAuthTokens(user);
  console.log(response)
  response(res,{ user, tenant, tokens }, 'User loged in successfully', 200)
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  const resetPass = await authService.resetPassword(req.query.token, req.body.password);
  res.send(resetPass);
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  const verify_email = await authService.verifyEmail(req.query.token);
  res.send(verify_email);
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
};