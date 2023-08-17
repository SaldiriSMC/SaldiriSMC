const fs = require('fs');
const JSZip = require('jszip');
const catchAsync = require('../../utils/catchAsync');
const { sequelize } = require('../../config/mySqlConnection');
const { response } = require('../../utils/response');
const { generateFrontEnd, absolutePath, generateBackEnd } = require('../../TemplateCode/generateAndDownload.JS');
const { Table, Tenant } = require('../../models/v2/index');

const getTables = catchAsync(async (req, res) => {
  const [results, metadata] = await sequelize.query('SHOW TABLES');
  res.send(results);
});

const getSelfGeneratedTables = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  const id = req.query.id;
  const tenant = await Tenant.findOne({ where: { key: key } });
  if (tenant) {
    if (id) {
      const table = await Table.findOne({ where: { id: id } });
      res.download(table.tableUrl);
    } else {
      const table = await Table.findAll({ where: { tenantId: tenant.id } });
      response(res, table, 'Get table data successfully', 200);
    }
  } else {
    response(res, '', 'No data found against this tenant', 200);
  }
});

const createTable = catchAsync(async (req, res) => {
  const key = req.get('X-Tenent-Key');
  const tenant = await Tenant.findOne({ where: { key: key } });
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
    boolean: 'DataTypes.BOOLEAN',
    'VARCHAR(255)': 'DataTypes.STRING',
  };
  req.body.columnArray.map((item) => {
    if (item.columnName != 'id' && item.columnName != 'tenantId') {
      if (item.dataType == 'FOREIGN KEY') {
        modelData += `${item?.columnName}:{
          type:DataTypes.INTEGER,
          references:{
            model:"${item.foreignKey}",
            key:"id"
          },
        },`;
        queryField += `,${item?.columnName} int`;
        constraaintFields += `,FOREIGN KEY (${item.columnName}) REFERENCES ${item.foreignKey}(id)`;
      } else {
        modelData += `${item?.columnName}:{
          type:${querytoSequlize[item.dataType]}
        },`;
        queryField += `,${item?.columnName} ${item.dataType}`;
      }
    }
  });
  modelData += `},{tableName:'${req.body.tableName}'}`;
  queryField += constraaintFields;
  let query = `CREATE TABLE ${req.body.tableName} (${queryField})`;
  const [results] = await sequelize.query(query);
  if (results) {
    const folders = ['FrontEnd', 'BackEnd'];
    folders.map(async (item, index) => {
      let folder = zip.folder(item);
      if (item == 'FrontEnd') {
        await generateFrontEnd(req.body.tableName, req.body.columnArray, folder);
      } else {
        await generateBackEnd(modelData, req.body.tableName, req.body.columnArray, folder);
      }
    });
    const zipBlob = await zip.generateAsync({ type: 'nodebuffer' });
    fs.writeFile(`${absolutePath}/uploads/${req.body.tableName}.zip`, zipBlob, async (err, result) => {
      if (err) {
        console.log('err------->>>>', err);
      } else {
        await Table.create({
          tableName: req.body.tableName,
          tenantId: tenant.id,
          tableUrl: `${absolutePath}/uploads/${req.body.tableName}.zip`,
        });
        res.writeHead(200, { 'Content-Type': `application/zip` });
        res.end(zipBlob);
      }
    });
  } else {
    response(res, '', 'No Table created', 400);
  }
});



module.exports = { getTables, createTable, getSelfGeneratedTables };
