const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Farari = sequelize.define('Farari', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Model:{
          type:DataTypes.INTEGER
        },},
);

module.exports = Farari;
