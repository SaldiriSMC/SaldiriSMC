const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const catchAsync = require('../../utils/catchAsync');
const { attendanceService } = require('../../services/v2');
const { response } = require('../../utils/response');
const { Attendance, Time } = require('../../models/v2');
const { callDBRoutine } = require('../../config/helperMethods');
const { currentDate } = require('../../utils/currentDate');
const ApiError = require('../../utils/ApiError');
const { query } = require('express');
const todayDate = currentDate();
const getAttendance = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['employeeName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await attendanceService.queryAttendance(req.query, filter, options);
  res.send(result);
});

const createAttendance = catchAsync(async (req, res) => {
  const id = req.params.attendanceId;
  const attendance = await Attendance.findOne({ where: { id: id } });
  if (attendance === null) {
    // TODO: If the attendence is not available then first create it
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance record not found');
  }
  const time = await Time.create({
    timeIn: `${todayDate} ${req.body.timeIn}`,
    timeOut: `${todayDate} ${req.body.timeOut}`,
    attendanceId: attendance.id,
  });
  updateWorkedHours(req.params.attendanceId);
  response(res, time, 'Time Record created succesfully', 200);
});

const updateAttendance = catchAsync(async (req, res) => {
  const time = await Time.update(
    { timeIn: `${todayDate} ${req.body.timeIn}`, timeOut: `${todayDate} ${req.body.timeOut}` },
    { where: { id: req.body.id } }
  );
  updateWorkedHours(req.params.attendanceId);
  if (time[0] === 1) {
    response(res, time, 'Time Record updated succesfully', 200);
  } else {
    response(res, time, 'Time Record not updated', 200);
  }
});

const deleteAttendance = catchAsync(async (req, res) => {
  const time = await Time.destroy({ where: { id: req.body.id } });
  updateWorkedHours(req.params.attendanceId);
  if (time === 1) {
    response(res, time, 'Time Record deleted succesfully', 200);
  } else {
    response(res, time, 'Time Record not deleted', 200);
  }
});
const updateWorkedHours = async (id) => {
  const result = await callDBRoutine('get_AttendanceSumByID', { attendanceId: id });
  const totalHours = result[0].Difference;
  if (totalHours < 8) {
    await Attendance.update({ workedHours: totalHours, statusId: null }, { where: { id: id } });
  } else {
    await Attendance.update({ workedHours: totalHours, statusId: null }, { where: { id: id } });
  }
};
const getAttendanceByHours = catchAsync(async (req, res) => {
  const options = await pick(req.query, ['sortBy', 'limit', 'page', 'columnName']);
  const limit = parseInt(options.limit);
  const page = parseInt(options.page);
  const offset = (page - 1) * limit;
  const sortBy = options.sortBy ? options.sortBy : 'desc';
  const columnName = options.columnName ? options.columnName : 'createdAt';
  const id = req.params.userId;
  const result = await callDBRoutine('get_AttendanceByHours', {
    id: id,
    date: new Date(),
    limit: limit,
    offset: offset,
    sortBy: sortBy,
    columnName: columnName,
  });
  let totalResults = 0;
  let totalPages = 0;
  if (result.length > 0) {
    totalResults = result[0].TotalCount;
    totalPages = Math.ceil(totalResults / limit);
  }
  response(
    res,
    { result, page: page, limit: limit, totalPages: totalPages, totalResults: totalResults },
    'Record found succesfully',
    200
  );
});

const getAttendanceWithWorkedHours = catchAsync(async (req, res) => {
  const id = req.params.userId;
  const attendance = await Attendance.findOne({ where: { userId: id } });
  if (attendance) {
    response(res, attendance, 'Get worked hours successfully', 200);
  } else {
    response(res, '', 'Record not found', 200);
  }
});

// const updateAttendance = catchAsync(async (req, res) => {
//   const attendance = await attendanceService.updateAttendance(req.params.userId, req.body);
//   response(res, attendance, 'Attendance Update Successfully', 200);
// });

module.exports = {
  getAttendance,
  updateAttendance,
  deleteAttendance,
  getAttendanceWithWorkedHours,
  getAttendanceByHours,
  createAttendance,
};
