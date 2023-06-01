const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../../config/mySqlConnection')
const { toJSON } = require('../plugins');
const { tokenTypes } = require('../../config/tokens');
const Token = sequelize.define('tokens', {
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        // user: {
        //   type: DataTypes.STRING,
        //   primaryKey:true,
        //   allowNull: false,
        // },
        type: {
          type: DataTypes.ENUM(tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL),
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
// `sequelize.define` also returns the model
console.log(Token === sequelize.models.Token); // true
// add plugin that converts mongoose to json
// Token.plugin(toJSON);
/**
 * @typedef Token
 */
module.exports = Token;
