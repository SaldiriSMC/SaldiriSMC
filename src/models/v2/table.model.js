const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Table = sequelize.define('tables', {
    tableName: {
        type:DataTypes.STRING,
        unique: true,
    },
    tableUrl:{
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

  module.exports = Table;