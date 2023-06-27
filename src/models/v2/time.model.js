const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

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
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
      },
      timeOut:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
      }
  });

  module.exports = Time;