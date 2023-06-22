const httpStatus = require('http-status');
const { Attendance } = require('../../models/v1/index');
const { currentDate  } = require("../../utils/currentDate")
const markAttendance = async (user, res) => {
  try {
    const start =  currentDate()
    const attendance = await Attendance.findOne({ userId: user._id, "createdAt": {
      '$gte': `${start}T00:00:00.000Z`,
      '$lt': `${start}T23:59:59.999Z`
    }});
    if (!attendance) {
       const attendance = await Attendance.create({  employeeName:user.name, userId:user._id, status:"Present"});
       attendance.time.push({timeIn: new Date(), timeOut:null});
       attendance.save()
    } else{
      attendance.time.push({timeIn: new Date(), timeOut:null});
      attendance.save()
    }
  } catch (err) {
    res.send(err);
  }
};

const markTimeOut = async (user, res) => {
  try {
    const start =  currentDate()
    const attendance = await Attendance.findOne({ userId: user._id, "createdAt": {
      '$gte': `${start}T00:00:00.000Z`,
      '$lt': `${start}T23:59:59.999Z`
    }});
    if (!attendance) {
      res.send("No record found")
    } 
    const lastIndex = attendance.time.length - 1
    const lastItem = attendance.time[lastIndex]
    lastItem.timeOut = new Date()
    attendance.save()
    return lastItem
  } catch (err) {
    res.send(err);
  }
};

module.exports = { markAttendance, markTimeOut };
