const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { attendanceService } = require('../../services/v1');
const {Tenant, User} = require("../../models/v1/index")

const getAttendance = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['employeeName', 'start_Date', 'end_Date']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await attendanceService.queryAttendance(filter, options, req);
    res.send(result);
});

const updateAttendance = catchAsync(async (req, res) => {
  const attendance = await attendanceService.updateAttedanceByUserId(req.params.userId, req.body);
  res.send(attendance);
});
module.exports = { getAttendance, updateAttendance }