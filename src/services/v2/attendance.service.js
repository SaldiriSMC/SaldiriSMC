const httpStatus = require('http-status');
const { Op } = require('sequelize');
const { Attendance, Time } = require('../../models/v2/index');
const markAttendance = async (user, res) => {
  try {
    const attendance = await Attendance.findOne({where:{ userId: user.id, Date: new Date()}});
    if (attendance === null) {
       const attendance = await Attendance.create({  employeeName:user.name, userId:user.id, status:"Present", Date: new Date()});
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
    return timeOut.dataValues
  } catch (err) {
    console.log("err--------->>>>>>>>>>",err)
    res.send(err);
  }
};

const queryAttendance = async(filter, option) =>{
 try{
  let condition = {}
  if(filter.employeeName){
    condition.employeeName = filter.employeeName
  }
  if( filter.start_Date  &&  filter.end_Date ){
    condition.Date = {
      [Op.between]:[filter.start_Date, filter.end_Date]
    }
  }
  else if(filter.start_Date){
    condition.Date = {
      [Op.gte]:filter.start_Date
    }
  }else if(filter.end_Date){
    condition.Date = {
      [Op.lte]:filter.end_Date
    }
  }
  const attendance = await Attendance.findAndCountAll({limit:parseInt(filter.limit), offset:((filter.page - 1 ) * filter.limit), where:condition});
  const totalResults = attendance.count;
  const totalPages = Math.ceil(totalResults / filter.limit);
  if(filter.sortBy === "desc"){
    return {results:attendance.rows.reverse(), page:filter.page, limit:filter.limit, totalPages: totalPages, totalResults:totalResults};
  }
  return {results:attendance.rows, page:filter.page, limit:filter.limit, totalPages: totalPages, totalResults:totalResults};
 }catch(err){
  console.log('err-------------->>>>>>>>>>>>>>',err)
 }
}



module.exports = { markAttendance, markTimeOut, queryAttendance };
