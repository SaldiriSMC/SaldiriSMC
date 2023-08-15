const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const catchAsync = require('../../utils/catchAsync');
const { sequelize } = require('../../config/mySqlConnection');
const { response } = require('../../utils/response');
const { generateAndDownloadZip, absolutePath, generateBackEnd } = require('../../TemplateCode/generateAndDownload.JS');

const getTables = catchAsync(async (req, res) => {
  const [results, metadata] = await sequelize.query('SHOW TABLES');
  res.send(results);
});

const createTable = catchAsync(async (req, res) => {
  const zip = new JSZip();
  let queryField = 'id int NOT NULL AUTO_INCREMENT, tenantId int';
  let constraaintFields = ',FOREIGN KEY (tenantId) REFERENCES tenants(id),PRIMARY KEY (id)';
  let modelData = `{tenantId:{
    type:DataTypes.INTEGER,
    references:{
      model:"tenants",
      key:"id"
    },
  },`;
  let querytoSequlize = {
    int: 'DataTypes.INTEGER',
    bool: 'DataTypes.BOOLEAN',
    'VARCHAR(255)': 'DataTypes.STRING',
  };
  req.body.columnArray.map((item) => {
    if (item.columnName != 'id' && item.columnName != 'tenantId') {
      if (item.dataType == 'FOREIGN KEY') {
        modelData += `${item?.columnName}:{
          type:DataTypes.INTEGER,
          references:{
            model:"${item.primaryKey}",
            key:"id"
          },
        },`;
        queryField += `,${item?.columnName} int`;
        constraaintFields += `,FOREIGN KEY (${item.columnName}) REFERENCES ${item.primaryKey}(id)`;
      } else {
        modelData += `${item?.columnName}:{
          type:${querytoSequlize[item.dataType]}
        },`;
        queryField += `,${item?.columnName} ${item.dataType}`;
      }
    }
  });
  modelData += '}';
  queryField += constraaintFields;
  let query = `CREATE TABLE ${req.body.tableName} (${queryField})`;
  const [results] = await sequelize.query(query);
  if (results) {
    const folders = ['FrontEnd', 'BackEnd'];
    folders.map(async (item, index) => {
      let folder = zip.folder(item);
      if (item == 'FrontEnd') {
        await generateAndDownloadZip(req.body.tableName, req.body.columnArray, folder);
      } else {
        await generateBackEnd(modelData, req.body.tableName, req.body.columnArray, folder )
      }
    });
    const zipBlob = await zip.generateAsync({ type: 'nodebuffer' });
    fs.writeFile(`${absolutePath}/uploads/${req.body.tableName}.zip`, zipBlob, (err, result) => {
      if(err){
        console.log('err------->>>>', err)
      }else{
        console.log('video saved!');
        res.writeHead(200, { 'Content-Type': `application/zip` });
        res.end(zipBlob);
      }
    });
  } else {
    response(res, '', 'No Table created', 400);
  }
});

module.exports = { getTables, createTable };
