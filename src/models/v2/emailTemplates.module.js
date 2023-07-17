const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const emailTemplate = sequelize.define('emailTemplates', {
    subject: {
        type:DataTypes.STRING,
      },
    body:{
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

  module.exports = emailTemplate;