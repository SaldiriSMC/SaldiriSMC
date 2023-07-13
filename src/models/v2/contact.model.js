const { sequelize } = require('../../config/mySqlConnection');
const { DataTypes } = require('sequelize');

const Contact = sequelize.define('contacts', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      isLowercase: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
});

module.exports = Contact;
