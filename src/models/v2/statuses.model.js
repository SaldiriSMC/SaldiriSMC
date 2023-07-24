const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Status = sequelize.define('statuses', {
    moduleId:{
    type: DataTypes.INTEGER,
      references:{
        model:"modules",
        key:"id"
      },
      allowNull:false
    },
    tenantId:{
      type: DataTypes.INTEGER,
      references:{
          model:"tenants",
          key:"id"
      },
  },
    statusName: {
        type:DataTypes.STRING,
      },
  });

  module.exports = Status;