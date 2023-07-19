const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');
const Attendance = sequelize.define('attendances', {
  userId: {
      type: DataTypes.INTEGER,
      references:{
        model:"user",
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
  statusId: {
    type: DataTypes.INTEGER,
    references:{
      model:"statuses",
      key:"id"
    },
    allowNull:false
  },
},);

module.exports = Attendance;