const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Recordsddfdsdssssdss = sequelize.define('Recordsddfdsdssssdss', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Name:{
          type:DataTypes.STRING
        },},
);

module.exports = Recordsddfdsdssssdss;
