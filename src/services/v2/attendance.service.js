const httpStatus = require('http-status');
const { Attendance, Time } = require('../../models/v2/index');
const markAttendance = async (user, res) => {
  try {
    const attendance = await Attendance.findOne({where:{ userId: user.id, Date: new Date()}});
    if (attendance === null) {
       const attendance = await Attendance.create({  employeeName:user.name, userId:user.id, status:"Present", Date: new Date()});
       console.log("attendance------->>>>>>",attendance)
       await Time.create({timeIn: new Date(), timeOut:null, attendanceId:attendance.id})
    } else{
      await Time.create({timeIn: new Date(), timeOut:null, attendanceId:attendance.id})
    }
  } catch (err) {
    res.send(err);
  }
};

const markTimeOut = async (user, res) => {
  try {
    const attendance = await Attendance.findOne({where:{ userId: user.id, Date: new Date()}});
    if (attendance === null) {
      res.send("No record found")
    }
    const time = await Time.findAll()
    consoel.log("time---------->>>>", time)
    const lastIndex = time.length - 1
    const lastItem = time[lastIndex]
    lastItem.timeOut = new Date()
    attendance.save()
    return lastItem
  } catch (err) {
    res.send(err);
  }
};



module.exports = { markAttendance, markTimeOut };
