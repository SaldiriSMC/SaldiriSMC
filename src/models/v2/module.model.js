const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Module = sequelize.define('modules', {
    moduleName: {
        type:DataTypes.STRING,
      },
  });

  module.exports = Module;