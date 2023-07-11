const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Designation = sequelize.define('designations', {
    designationName: {
        type:DataTypes.STRING,
      },
  });

  module.exports = Designation;