const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { User, Tenant, Attendance, Token, Time } = require('../../models/v2/index');
const { authService, userService, tokenService, emailService, tenantService, attendanceService } = require('../../services/v2');
const {response} = require("../../utils/response");
const { tokenTypes } = require('../../config/tokens');

const register = catchAsync(async (req, res) => {
  try {
    const alias = await Tenant.findOne({ where: { alias: req.body.alias } });
    const isEmail = await User.findOne({ where: { email: req.body.email } });
    if (isEmail === null) {
      if (alias === null) {
        if(req.body.type === "user"){
          response(res, "", 'No tenant found against this alias', httpStatus.BAD_REQUEST)
        } 
        const tenant = await tenantService.createTenant(req.body, res);
        if (tenant) {
          const user = await userService.createUser(req.body, tenant.id, null);
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
  const attendance = await Attendance.findOne({ where: { userId: user.id, Date: new Date() } });
  const tenant = await Tenant.findOne({where:{id:user.tenantId}})
  const token = await Token.findOne({where:{type:tokenTypes.AUTH, user:user.id}})
  console.log("tokens in login call ",token)
  if(token){
    const time = await Time.findOne({where:{timeOut:null, attendanceId:attendance.id}})
    console.log("time in login call --------->>>>>>>", time)
    if(time){
      
      await attendanceService.markTimeOut(time.id, attendance,  res)
    }

  }
  const tokens = await tokenService.generateAuthTokens(user);
  const timeDoc = await attendanceService.markAttendance(user, res)
  response(res,{ user, tenant, tokens, timeDoc }, 'User loged in successfully', 200)
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  const tokenDoc = await authService.logout(req.body.refreshToken); 
  let attendanceDoc = await Attendance.findOne({where:{id:req.body.attendanceId}})
  await attendanceService.markTimeOut(req.body.timeId, attendanceDoc, res)
  await tokenDoc.destroy()
  response(res, "", "User loged out successfully", 200)
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  console.log("resetPasswordToken", resetPasswordToken)
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(200).send({message:"We send you a email to reset your password. Please check your email address."});
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
