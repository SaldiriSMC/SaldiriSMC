const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Status = sequelize.define('status', {
    moduleId:{
    type: DataTypes.INTEGER,
      references:{
        model:"attendances",
        key:"id"
      },
      allowNull:false
    },
    status: {
        type:DataTypes.STRING,
      },
  });

  module.exports = Status;