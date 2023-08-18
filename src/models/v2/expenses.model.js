const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mySqlConnection')

const expenses = sequelize.define('expenses', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },expensedetail:{
          type:DataTypes.STRING
        },amount:{
          type:DataTypes.INTEGER
        },tax:{
          type:DataTypes.INTEGER
        },},{tableName:'expenses'},
);

module.exports = expenses;
