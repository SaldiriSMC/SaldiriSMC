const fs = require("fs")
const model = `const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/mySqlConnection')

const #_name = sequelize.define('#_tablename', #_modelData,
);

module.exports = #_name;
`
const getTemplate = (modelData, tableName) => {
 const replacedModel =  model.replace(/#_tablename/g, tableName)
 .replace(/#_modelData/g, modelData)
 .replace(/#_name/g, tableName)
  console.log("replacedModel--------->>>>>>", replacedModel)
  fs.writeFile("model.js", replacedModel, "utf-8", ((err, result)=>{
    if(err){
      console.log("err--------->>>>",err)
    }else{
      console.log("result--------->>>>",result)
    }
  }))
}

module.exports = { getTemplate }