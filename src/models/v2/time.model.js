const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Time = sequelize.define('time', {
    attendanceId:{
    type: DataTypes.INTEGER,
      references:{
        model:"attendances",
        key:"id"
      },
      // allowNull:false,
      onDelete: 'CASCADE'
    },
    timeIn: {
        type:DataTypes.DATE,
      },
      timeOut:{
        type:DataTypes.DATE,
      }
  });

  module.exports = Time;