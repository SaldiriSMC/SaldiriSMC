const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Recordsssdss = sequelize.define('Recordsssdss', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Name:{
          type:DataTypes.STRING
        },},
);

module.exports = Recordsssdss;
