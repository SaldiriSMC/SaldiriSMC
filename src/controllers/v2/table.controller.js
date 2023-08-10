const catchAsync = require('../../utils/catchAsync');
const { sequelize } = require('../../config/mySqlConnection');
const {response} = require("../../utils/response")
const { generateModel } = require("../../TemplateCode/template.model")
const { generateRoute } = require("../../TemplateCode/template.route")
const { generateService } = require("../../TemplateCode/template.service")
const { generateController } =  require("../../TemplateCode/template.controller")
const getTables = catchAsync(async (req, res) => {
  const [results, metadata] = await sequelize.query('SHOW TABLES');
  res.send(results);
});

const createTable = catchAsync(async (req, res) => {
  let queryField = 'id int NOT NULL';
  let constraaintFields = ',PRIMARY KEY (id)';
  let modelData="{"
  let querytoSequlize = {
    'int':'DataTypes.INTEGER',
    'bool':"DataTypes.BOOLEAN",
    'VARCHAR(255)':"DataTypes.STRING",
  }
  req.body.columnArray.map((item) => {
    if (item.dataType == 'FOREIGN KEY') {
      modelData +=`${item?.columnName}:{
        type:DataTypes.INTEGER,
        references:{
          model:"${item.primaryKey}",
          key:"id"
        },
      },`
      queryField += `,${item?.columnName} int`;
      constraaintFields += `,FOREIGN KEY (${item.columnName}) REFERENCES ${item.primaryKey}(id)`;
    } else {
      modelData +=`${item?.columnName}:{
        type:${querytoSequlize[item.dataType]}
      },`
      queryField += `,${item?.columnName} ${item.dataType}`;
    }
  });
  modelData +="}"
  queryField += constraaintFields;
  let query = `CREATE TABLE ${req.body.tableName} (${queryField})`;
  console.log('query--------->>>>>>>>', query);
  const [results] = await sequelize.query(query);
  if(results){
    generateModel(modelData, req.body.tableName)
    generateService(req.body.tableName)
    generateController(req.body.tableName)
    generateRoute(req.body.tableName)
    response(res, {result:results }, 'Table created successfully', 200);
  }else{
    response(res,"", 'No Table created', 400);
  }
});

module.exports = { getTables, createTable };
