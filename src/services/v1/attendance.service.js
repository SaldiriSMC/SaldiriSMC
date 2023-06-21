const httpStatus = require('http-status');
const { Tenant, Attendance, Time } = require('../../models/v1/index');
const { currentDate , currentTime } = require("../../utils/currentDate")
const markAttendance = async (user, res) => {
  try {
    const attendance = await Attendance.findOne({ userId: user._id, date:currentDate() });
    console.log("attendance---------->>>>>>>>>", attendance)
    if (!attendance) {
       const attendance = await Attendance.create({  employeeName:user.name, userId:user._id,});
       attendance.time.push({timeIn: new Date().getTime(), timeOut:null});
       console.log("attendance----->>>>>", attendance)
    } else {
      console.log("attendance record found")
    }
  } catch (err) {
    console.log('err----->>>>>>>', err);
    res.send(err);
  }
};

module.exports = { markAttendance };
