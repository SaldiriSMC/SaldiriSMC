const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const catchAsync = require('../../utils/catchAsync');
const { attendanceService } = require('../../services/v2');
const { response } = require('../../utils/response');

const getAttendance = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['employeeName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await attendanceService.queryAttendance(req.query, filter, options);
  res.send(result);
});


const updateAttendance = catchAsync(async (req, res) => {
  const attendance = await attendanceService.updateAttendance(req.params.userId, req.body);
  response(res, attendance, 'Attendance Update Successfully', 200);
});


module.exports = { getAttendance, updateAttendance };
