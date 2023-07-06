const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Module = sequelize.define('modules', {
    statusId:{
    type: DataTypes.INTEGER,
      references:{
        model:"attendances",
        key:"id"
      },
      allowNull:false
    },
    module: {
        type:DataTypes.STRING,
      },
  });

  module.exports = Module;