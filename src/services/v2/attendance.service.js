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
    const updateTimeOut = await Time.update({timeOut: new Date()},{
      where: { attendanceId:attendance.id },
      order: [ [ 'createdAt', 'DESC' ]],
    });
    const timeOut = await Time.findOne({where: { attendanceId:attendance.id },
      order: [ [ 'createdAt', 'DESC' ]],})
    console.log("timeOut------------>>>>>>>>>>>",timeOut)
    return timeOut.dataValues
  } catch (err) {
    console.log("err--------->>>>>>>>>>",err)
    res.send(err);
  }
};



module.exports = { markAttendance, markTimeOut };
