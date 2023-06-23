const httpStatus = require('http-status');
const { Attendance, Time } = require('../../models/v2/index');
const { currentDate  } = require("../../utils/currentDate")
const markAttendance = async (user, res) => {
  try {
    const start =  currentDate()
    const attendance = await Attendance.findOne({where:{ userId: user.id, "createdAt": {
      '$gte': `${start}T00:00:00.000Z`,
      '$lt': `${start}T23:59:59.999Z`
  }}});
    if (attendance === null) {
       await Attendance.create({  employeeName:user.name, userId:user.id, status:"Present"});
       await Time.create({timeIn: new Date(), timeOut:null})
    } else{
      await Time.create({timeIn: new Date(), timeOut:null})
    }
  } catch (err) {
    res.send(err);
  }
};

const markTimeOut = async (user, res) => {
  try {
    const start =  currentDate()
    const attendance = await Attendance.findOne({where:{ userId: user.id, "createdAt": {
      '$gte': `${start}T00:00:00.000Z`,
      '$lt': `${start}T23:59:59.999Z`
  }}});
    if (attendance === null) {
      res.send("No record found")
    }
    const time = await Time.findAll()
    const lastIndex = time.length - 1
    const lastItem = time[lastIndex]
    lastItem.timeOut = new Date()
    return lastItem
  } catch (err) {
    res.send(err);
  }
};



module.exports = { markAttendance, markTimeOut };
