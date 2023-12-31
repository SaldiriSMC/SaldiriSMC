const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');
const Tenant = sequelize.define('tenants', {
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
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  alias:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
},
);
/**
 * @typedef Tenant
 */
module.exports = Tenant;