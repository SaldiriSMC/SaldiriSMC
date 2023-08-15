const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Recordss = sequelize.define('Recordss', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Name:{
          type:DataTypes.STRING
        },},
);

module.exports = Recordss;
