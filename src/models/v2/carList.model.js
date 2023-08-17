const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mySqlConnection');

const carList = sequelize.define(
  'carList',
  {
    tenantId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tenants',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    CarColor: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    carPrice: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: 'carList' }
);

module.exports = carList;
