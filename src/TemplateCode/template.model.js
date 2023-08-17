const fs = require('fs');
const path = require('path');
const model = `const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/mySqlConnection')

const #_name = sequelize.define('#_tablename', #_modelData,
);

module.exports = #_name;
`;
const generateModel = async (modelData, tableName, zip) => {
  const replacedModel = model
    .replace(/#_tablename/g, tableName)
    .replace(/#_modelData/g, modelData)
    .replace(/#_name/g, tableName);
  zip.folder('models').file(`${tableName}.model.js`, replacedModel);
};

module.exports = { generateModel };
