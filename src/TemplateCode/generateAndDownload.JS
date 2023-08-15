const path = require('path');
const fs = require('fs');
const { generateModel } = require('./template.model');
const { generateRoute } = require('./template.route.js');
const { generateService } = require('./template.service');
const { generateController } = require('./template.controller');
const absolutePath = path.resolve(__dirname, '..');

const generateAndDownloadZip = async (tableName, ColumnsList, zip) => {
  const fileData = [
    { path: '/tempFiles/routingStep1.js', newName: 'src/App.js' },
    { path: '/tempFiles/addInMenu.js', newName: 'pages/addInMenu.js' },
    { path: '/tempFiles/tableFile.js', newName: `pages/${tableName}.js` },
    { path: '/tempFiles/tableConfig.js', newName: 'configs/tableConfig.js' },
    { path: '/tempFiles/action/actionTypes.js', newName: `action/${tableName}/actionTypes.js` },
    { path: '/tempFiles/action/index.js', newName: `action/${tableName}/index.js` },
    { path: '/tempFiles/SagaFile.js', newName: `sagas/${tableName}Saga.js` },
    { path: '/tempFiles/rootSga.js', newName: `sagas/rootSaga.js` },
    { path: '/tempFiles/ReducerFile.js', newName: `reducer/${tableName}Reducer.js` },
    { path: '/tempFiles/rootReducer.js', newName: `reducer/rootReducer.js` },
    { path: '/tempFiles/url.js', newName: `constants/urls.js` },
    { path: '/tempFiles/tableModel.js', newName: `sharedComponents/${tableName}Model.js` },
  ];
  const replacements = [
    { placeholder: '#tableName', replacement: tableName },
    { placeholder: '#tableTitle', replacement: tableName.toUpperCase() },
    { placeholder: '#tableTitle', replacement: tableName.toUpperCase() },
  ];
  fileData.map((fileInfo) => {
    const { path, newName } = fileInfo;
    const folderPath = newName.substring(0, newName.lastIndexOf('/'));
    const subfolderPath = folderPath + '/actions';
    const folder = zip.folder(folderPath);
    const result = fs.readFileSync(`${absolutePath}/frontEndFiles${path}`, 'utf8');
    let newCode = result;
    replacements.forEach((replacement) => {
      if (path == `/tempFiles/tableConfig.js`) {
        const jsCodea = convertToJavascript(ColumnsList, tableName);
        newCode = newCode.replace(/#tableName/g, jsCodea);
      } else if (path == `/tempFiles/tableModel.js`) {
        const jsCodea = convertToJavascriptInpits(ColumnsList, tableName);
        newCode = newCode.replaceAll('#inputArr', tableName).replace(/#list/g, jsCodea);
      } else {
        newCode = newCode.replaceAll(replacement.placeholder, replacement.replacement);
      }
    });
    if (path === '/tempFiles/action/actionTypes.js') {
      const f = folder.folder(tableName);
      f.file(newName.substring(newName.lastIndexOf('/') + 1), newCode);
    } else if (path === '/tempFiles/action/index.js') {
      const f = folder.folder(tableName);
      f.file(newName.substring(newName.lastIndexOf('/') + 1), newCode);
    } else {
      folder.file(newName.substring(newName.lastIndexOf('/') + 1), newCode);
    }
  });
};

function convertToJavascript(data, tableName) {
  const columnEntries = data
    .map(
      (item) => `
    {
      id: "${item.columnName}",
      name: "${item.columnName}",
      renderer: 'Text',
      align: "left",
      label: "${capitalizeFirstLetter(item.columnName)}",
    }`
    )
    .join(',');
  const jsCode = `
  export const ${tableName} = [
    ${columnEntries},
    {
      id: "action",
      name: "action",
      renderer: "EditDeleteAction",
      align: "right",
      label: "Actions",
    },
  ];
    `;
  return jsCode;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function convertToJavascriptInpits(data, tableName) {
  const columnEntries = data
    .map(
      (item) => `
    {
      columnName: "",
      columnTitle: "${item.columnName}",
    }`
    )
    .join(',');
  const jsCode = `
    const [${tableName}, set${tableName}] = useState([
    ${columnEntries},
  ]);
    `;
  return jsCode;
}

const generateBackEnd = async (modelData, tableName, columnArray, folder) => {
   generateModel(modelData, tableName, folder);
   generateService(tableName, folder);
   generateController(tableName, folder);
   generateRoute(columnArray, tableName, folder);
};
module.exports = { generateAndDownloadZip, absolutePath, generateBackEnd };
