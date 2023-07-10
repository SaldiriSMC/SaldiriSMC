const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Department = sequelize.define('departments', {
    departmentName: {
        type:DataTypes.STRING,
      },
  });

  module.exports = Department;