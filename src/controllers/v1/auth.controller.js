const httpStatus = require('http-status');
const catchAsync = require('../../utils/catchAsync');
const { authService, userService, tokenService, emailService, tenantService, attendanceService } = require('../../services/v1');
const { User, Tenant, Attendance } = require('../../models/v1/index');
const {response} = require("../../utils/response")

const register = catchAsync(async (req, res) => {
  try {
    const alias = await Tenant.findOne({ alias: req.body.alias });
    console.log("alias------->>>>>",alias)
    const isEmail = await User.isEmailTaken(req.body.email);
    if (!isEmail) {
      if (!alias) {
        if(req.body.type === "user"){
          response(res, "", "No tenant found agaist this alias", httpStatus.BAD_REQUEST)
        }
        const tenant = await tenantService.createTenant(req.body, res);
        if (tenant) {
          const user = await userService.createUser(req.body, tenant.id);
          if (user) {
            const tokens = await tokenService.generateAuthTokens(user);
            response(res, { tenant, user, tokens }, "company created successfullly", httpStatus.CREATED)
          }
        }
      } else {
        if(req.body.type === "company"){
          response(res, "", "Alias already taken", httpStatus.BAD_REQUEST)
        }
        const user = await userService.createUser(req.body, alias.id, 'user');
        if (user) {
          const tokens = await tokenService.generateAuthTokens(user);
          response(res, { user, tokens }, "user created successfullly", httpStatus.CREATED)
          res.status(httpStatus.CREATED).send({ user, tokens });
        }
      }
    } else {
      response(res, "", "Email already taken", httpStatus.BAD_REQUEST)
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  const attendance =  await attendanceService.markAttendance(user, res)
  response(res, { user, tokens }, "User loged in successfully", 200)
});

const logout = catchAsync(async (req, res) => {
  const tokenDoc = await authService.logout(req.body.refreshToken); 
  const userDoc = await User.findOne({_id:tokenDoc.user})
  let attendanceDoc = await Attendance.findOne({userId:userDoc._id})
  let totalWorkedHours = attendanceDoc.workedHours
  const timeInTimeOut = await attendanceService.markTimeOut(userDoc, res)
  const timeOutMiliSeconds = timeInTimeOut.timeOut.getTime()
  const timeInMiliSeconds = timeInTimeOut.timeIn.getTime()
  const sessionMiliSeconds = timeOutMiliSeconds - timeInMiliSeconds
  const sessionWorkedHours = sessionMiliSeconds / (1000 * 60 * 60);
  totalWorkedHours += sessionWorkedHours
  attendanceDoc.workedHours = totalWorkedHours.toFixed(2)
  if(attendanceDoc.workedHours < 8){
    attendanceDoc.status = "Break"
  }else{
    attendanceDoc.status = "Day Completed"
  }
  attendanceDoc.save()
  await tokenDoc.remove();
  response(res, "", "User loged out successfully", 200)
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  response(res, "", "We sent you an email to reset your password. Please check your email address.", 200)
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password, res);
  response(res, "", "Password changed successfully", 200)
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
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
