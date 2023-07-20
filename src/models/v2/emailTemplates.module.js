const {sequelize} = require('../../config/mySqlConnection')
const { DataTypes } = require('sequelize');

const emailTemplate = sequelize.define('emailTemplates', {
    subject: {
        type:DataTypes.STRING,
      },
    body:{
        type:DataTypes.TEXT,
    },
    // typeId:{
    //     type: DataTypes.INTEGER,
    //     references:{
    //         model:"types",
    //         key:"id"
    //     },
    // },
    tenantId:{
        type: DataTypes.INTEGER,
        references:{
            model:"tenants",
            key:"id"
        },
    },
  });

  module.exports = emailTemplate;