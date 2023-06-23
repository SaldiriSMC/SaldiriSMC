const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');
const Attendance = sequelize.define('attendance', {
  userId: {
      type: DataTypes.INTEGER,
      references:{
        model:"users",
        key:"id"
      },
      allowNull:false
  },
  serialNo: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull:false
  },
  Date:{
      type:DataTypes.DATEONLY,
  },
  employeeName:{
      type:DataTypes.STRING,
      allowNull:false,
  },
  workedHours:{
      type:DataTypes.FLOAT,
      defaultValue: 0,
      allowNull:false
  },
  status:{    
    type: DataTypes.ENUM('Absent', 'Present', 'Break', 'DayCompleted'),
    defaultValue:'Absent'
  }
},);

module.exports = Attendance;