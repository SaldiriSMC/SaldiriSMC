const httpStatus = require('http-status');
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');
const { Attendance, Time } = require('../../models/v2/index');
const ApiError = require('../../utils/ApiError');
const { currentDate } = require('../../utils/currentDate');
const todayDate = currentDate();
const { sequelize } = require('../../config/mySqlConnection');
const markAttendance = async (user, res) => {
  try {
    const attendance = await Attendance.findOne({ where: { userId: user.id, Date: new Date() } });
    if (attendance === null) {
      const attendance = await Attendance.create({
        employeeName: user.name,
        userId: user.id,
        statusId: 4,
        Date: new Date(),
      });
      await Time.create({ timeIn: new Date(), timeOut: null, attendanceId: attendance.id });
    } else {
      await Time.create({ timeIn: new Date(), timeOut: null, attendanceId: attendance.id });
    }
  } catch (err) {
    console.log('err------->',err)
    //res.send(err);
  }
};

const markTimeOut = async (user, res) => {
  try {
    const attendance = await Attendance.findOne({ where: { userId: user.id, Date: new Date() } });
    if (attendance === null) {
      res.send('No record found');
    }
    const updateTimeOut = await Time.update(
      { timeOut: new Date() },
      {
        where: { attendanceId: attendance.id },
        order: [['createdAt', 'DESC']],
      }
    );
    const timeOut = await Time.findOne({ where: { attendanceId: attendance.id }, order: [['createdAt', 'DESC']] });
    return timeOut.dataValues;
  } catch (err) {
    console.log('err--------->>>>>>>>>>', err);
    res.send(err);
  }
};

const queryAttendance = async (filter, option) => {
  try {
    let condition = {};
    if (filter.employeeName) {
      condition.employeeName = filter.employeeName;
    }
    if (filter.start_Date && filter.end_Date) {
      condition.Date = {
        [Op.between]: [filter.start_Date, filter.end_Date],
      };
    } else if (filter.start_Date) {
      condition.Date = {
        [Op.gte]: filter.start_Date,
      };
    } else if (filter.end_Date) {
      condition.Date = {
        [Op.lte]: filter.end_Date,
      };
    }
    const attendance = await Attendance.findAndCountAll({
      limit: parseInt(filter.limit),
      offset: (filter.page - 1) * filter.limit,
      where: condition,
    });
    const totalResults = attendance.count;
    const totalPages = Math.ceil(totalResults / filter.limit);
    if (filter.sortBy === 'desc') {
      return {
        results: attendance.rows.reverse(),
        page: filter.page,
        limit: filter.limit,
        totalPages: totalPages,
        totalResults: totalResults,
      };
    }
    return {
      results: attendance.rows,
      page: filter.page,
      limit: filter.limit,
      totalPages: totalPages,
      totalResults: totalResults,
    };
  } catch (err) {
    console.log('err-------------->>>>>>>>>>>>>>', err);
  }
};

const updateWorkedHours = async (attendance, attendanceId) => {
  let res = await sequelize.query('call get_AttendanceSumByID(:id, :date)', {
    replacements: {
      id: attendance.id,
      date: attendance.Date,
    },
    type: QueryTypes.SELECT,
  });
  let workedHours = res[0];
  workedHours = workedHours['0']?.Difference;
  if (workedHours < 8) {
    await Attendance.update({ workedHours: workedHours, statusId:1 }, { where: { id: attendanceId } });
  } else {
    await Attendance.update({ workedHours: workedHours, statusId:2 }, { where: { id: attendanceId } });
  }
};
const updateAttendance = async (attendanceId, updateBody) => {
  const attendance = await Attendance.findOne({ where: { id: attendanceId } });
  console.log('attendance---------------->>>>>>>>', attendance);
  if (attendance === null) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Attendance record not found');
  }
  let updateAttendance;
  if (updateBody.status) {
    updateAttendance = await Attendance.update({ status: updateBody.status }, { where: { id: attendanceId } });
  }
  if (updateBody.time.length > 0) {
    const updateTime = updateBody.time.map(async (item) => {
      let timeCondition = {};
      if (item.timeIn && item.timeOut) {
        timeCondition.timeIn = `${todayDate} ${item.timeIn}`;
        timeCondition.timeOut = `${todayDate} ${item.timeOut}`;
      } else if (item.timeIn) {
        timeCondition.timeIn = `${todayDate} ${item.timeIn}`;
      } else if (item.timeOut) {
        timeCondition.timeOut = `${todayDate} ${item.timeOut}`;
      }
      if (!item.id) {
        await Time.create({ ...timeCondition, attendanceId: attendanceId });
        updateWorkedHours(attendance, attendanceId);
      } else if (item.id && item.isUpdate) {
        await Time.update(timeCondition, { where: { id: item.id } });
        updateWorkedHours(attendance, attendanceId);
      } else if (item.id && item.isDeleted) {
        await Time.destroy({ where: { id: item.id } });
        updateWorkedHours(attendance, attendanceId);
      }
    });
    return { updateTime, updateAttendance };
  }
  return updateAttendance;
};

module.exports = { markAttendance, markTimeOut, queryAttendance, updateAttendance, updateWorkedHours };
