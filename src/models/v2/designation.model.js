const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Designation = sequelize.define('designations', {
    designationName: {
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

  module.exports = Designation;