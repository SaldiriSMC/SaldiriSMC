const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Recorddfdsdssssdss = sequelize.define('Recorddfdsdssssdss', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Name:{
          type:DataTypes.STRING
        },},
);

module.exports = Recorddfdsdssssdss;
