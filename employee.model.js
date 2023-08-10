const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/mySqlConnection')

const employee = sequelize.define('employee', {name:{
        type:DataTypes.STRING
      },age:{
        type:DataTypes.INTEGER
      },userId:{
        type:DataTypes.INTEGER,
        references:{
          model:"users",
          key:"id"
        },
      },},
);

module.exports = employee;
