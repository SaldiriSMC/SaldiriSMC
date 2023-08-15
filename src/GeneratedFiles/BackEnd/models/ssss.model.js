const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../config/mySqlConnection')

const ssss = sequelize.define('ssss', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },x:{
          type:undefined
        },},
);

module.exports = ssss;
