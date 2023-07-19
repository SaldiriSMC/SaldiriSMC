const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const Type = sequelize.define('types', {
    typeName: {
        type:DataTypes.STRING,
      },
    tenantId:{
        type: DataTypes.INTEGER,
        references:{
            model:"tenants",
            key:"id"
        },
    },
  });

  module.exports = Type;