const { DataTypes } = require('sequelize');
const {sequelize} = require('../../config/mySqlConnection')
const { tokenTypes } = require('../../config/tokens');
const Token = sequelize.define('tokens', {
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user: {
          type: DataTypes.INTEGER,
          references:{
            model:"users",
            key:"id"
          },
          allowNull: false,
        },
        type: {
          type: DataTypes.ENUM(tokenTypes.REFRESH, tokenTypes.ACCESS, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL, tokenTypes.EMAIL_INVITATION),
          allowNull: false,
        },
        expires: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        blacklisted: {
          type: DataTypes.BOOLEAN,
        },
      },
      {
        timestamps: true,
      }
);
/**
 * @typedef Token
 */
module.exports = Token;
