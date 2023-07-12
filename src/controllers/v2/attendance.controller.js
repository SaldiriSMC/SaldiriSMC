const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const catchAsync = require('../../utils/catchAsync');
const { attendanceService } = require('../../services/v2');
const { response } = require('../../utils/response');
const { Attendance } = require('../../models/v2');
const { callDBRoutine } = require("../../config/helperMethods")
const getAttendance = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['employeeName']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await attendanceService.queryAttendance(req.query, filter, options);
  res.send(result);
});

const getAttendanceByHours = catchAsync(async(req, res) =>{
  const id = req.params.userId;
  callDBRoutine("get_AttendanceByHours", {'id':id, 'date': new Date()}, res)
  
})

const getAttendanceWithWorkedHours = catchAsync(async(req, res) =>{
  const id = req.params.userId
  const attendance =  await Attendance.findOne({where:{userId:id}})
  if(attendance){
    response(res, attendance, "Get worked hours successfully", 200)
  }else{
    response(res, "", "Record not found", 200)
  }
})

const updateAttendance = catchAsync(async (req, res) => {
  const attendance = await attendanceService.updateAttendance(req.params.userId, req.body);
  response(res, attendance, 'Attendance Update Successfully', 200);
});


module.exports = { getAttendance, updateAttendance, getAttendanceWithWorkedHours, getAttendanceByHours};
