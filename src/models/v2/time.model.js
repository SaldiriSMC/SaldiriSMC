const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes, ENUM } = require('sequelize');

const Time = sequelize.define('time', {
    attendanceId:{
    type: DataTypes.INTEGER,
      references:{
        model:"attendances",
        key:"id"
      },
      allowNull:false
    },
    timeIn: {
        type:DataTypes.TIME,
      },
      timeOut:{
        type:DataTypes.TIME
      }
  });

  module.exports = Time;