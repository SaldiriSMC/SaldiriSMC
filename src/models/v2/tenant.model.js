const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');
const Tenant = sequelize.define('tenant', {
  key:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  tanantName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  domain: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
},
);
/**
 * @typedef Tenant
 */
module.exports = Tenant;