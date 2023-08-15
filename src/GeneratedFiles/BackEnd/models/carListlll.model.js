const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const carListlll = sequelize.define('carListlll', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },ssss:{
          type:DataTypes.STRING
        },},
);

module.exports = carListlll;
