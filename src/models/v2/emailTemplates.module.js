const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const emailTemplate = sequelize.define('emailTemplates', {
    subject: {
        type:DataTypes.STRING,
        unique: true,
      },
    body:{
        type:DataTypes.TEXT,
    },
    tenantId:{
        type: DataTypes.INTEGER,
        references:{
            model:"tenants",
            key:"id"
        },
    },
  });

  module.exports = emailTemplate;