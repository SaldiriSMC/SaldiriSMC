const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Recorddfsssdss = sequelize.define('Recorddfsssdss', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Name:{
          type:DataTypes.STRING
        },},
);

module.exports = Recorddfsssdss;
