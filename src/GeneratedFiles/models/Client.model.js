const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mySqlConnection');

const Client = sequelize.define('Client', {
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
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Client;
