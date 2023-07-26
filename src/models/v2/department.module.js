const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Department = sequelize.define('departments', {
    departmentName: {
        type:DataTypes.STRING,
        unique: true,
      },
    tenantId:{
        type: DataTypes.INTEGER,
        references:{
            model:"tenants",
            key:"id"
        },
    },
  });

  module.exports = Department;