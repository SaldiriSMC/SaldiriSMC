const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const Fararies = sequelize.define('Fararies', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },Model:{
          type:DataTypes.INTEGER
        },},
);

module.exports = Fararies;
