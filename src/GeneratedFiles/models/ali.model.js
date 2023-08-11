const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mySqlConnection')

const ali = sequelize.define('ali', {tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },ssss:{
          type:DataTypes.STRING
        },},
);

module.exports = ali;
