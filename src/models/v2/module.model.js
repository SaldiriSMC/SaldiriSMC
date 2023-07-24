const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Module = sequelize.define('modules', {
    moduleName: {
        type:DataTypes.STRING,
      },
    tenantId:{
    type: DataTypes.INTEGER,
    references:{
        model:"tenants",
        key:"id"
    },
    },
  });

  module.exports = Module;