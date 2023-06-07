const { DataTypes } = require('sequelize');
const {sequelize} = require('../../config/mySqlConnection')
const tenant = require("./tenant.model")
const User = sequelize.define('users', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate:{
      isEmail:true,
      isLowercase:true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      validate(value) {
        if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
          throw new Error('Password must contain at least one letter and one number');
        }
    }
    },
  },
  role: {
    type:DataTypes.ENUM('admin','user')
  },
  isEmailVerified: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  tenantId:{
    type: DataTypes.STRING,
    references:{
      model:"tenant",
      key:"id"
    },
  },
},
);
module.exports = User;

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
/**
 * @typedef User
 */

