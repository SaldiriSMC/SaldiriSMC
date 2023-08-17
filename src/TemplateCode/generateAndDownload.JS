const path = require('path');
const fs = require('fs');
const { generateModel } = require('./template.model');
const { generateRoute } = require('./template.route.js');
const { generateService } = require('./template.service');
const { generateController } = require('./template.controller');
const absolutePath = path.resolve(__dirname, '..');

const generateFrontEnd = async (tableName, ColumnsList, zip) => {
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
      } else if (path == '/tempFiles/tableModel.js') {
        const jsCodea = convertToJavascriptInpits(ColumnsList, tableName);
        const apiCall = ApiCallData(ColumnsList, tableName);
        const jsCodeUI = convertToFormUI(ColumnsList, tableName);
        const fornKeyCall = fornKeyCallFun(ColumnsList, tableName);
        newCode = newCode.replaceAll('#inputArr', tableName).replace('#list', jsCodea).replace('#UI', jsCodeUI).replace('#keyCallFun', fornKeyCall).replace('#keyState', apiCall);
      }
       else if (path == '/tempFiles/tableFile.js') {
        const mapList = convertToJavascriptMapData(ColumnsList, tableName);
        newCode = newCode.replaceAll('#tableName', tableName).replace('#tableTitle', tableName.toUpperCase()).replace('#mapList', mapList);
      }
      else {
        newCode = newCode.replaceAll(replacement.placeholder, replacement.replacement);
      }
    });
    folder.file(newName.substring(newName.lastIndexOf('/') + 1), newCode);
  });
};

function convertToFormUI(data, tableName) {
  const columnEntries = data.map(item => {
    if (item.dataType === 'FOREIGN KEY') {
      return `
        <MUITextField
          sm={6}
          label='${item.columnName}'
          xs={6}
          name='${item.columnName}'
          value={${tableName}.${item.columnName}}
          handleChange={(event) => handleInputChange(event)}
          variant='inner'
          id='${item.columnName}'
          disabled
          placeholder=''
          type="select"
          options={[]}
          pass="primaryKeys"
        />`;
    } else {
      return `
      <MUITextField
      sm={6}
      label='${item.columnName}'
      xs={6}
      name='${item.columnName}'
      type={'${item.dataType === 'int' ?  'number' :'text' }'}
      value={${tableName}.${item.columnName}}
      handleChange={(event) => handleInputChange(event)}
      variant='inner'
      id='${item.columnName}'
      placeholder=''
    />`;
    } 
  });


const jsCode = columnEntries.join('');

  return jsCode;
}
function convertToJavascript(data, tableName) {
  const columnEntries = data.map(item => `
  {
    id: "${item.columnName}",
    name: "${item.columnName}",
    renderer: 'Text',
    align: "left",
    label: "${capitalizeFirstLetter(item.columnName)}",
  }`).join(',');

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
  const columnEntries = data.map(item =>{
    if (!(item.dataType === 'FOREIGN KEY')) {
return   ` ${item.columnName}: ""`
    }
  })
  const jsCode = `
  const [${tableName}, set${tableName}] = useState({
  ${columnEntries}
  });
  `;

  return jsCode;
}
function fornKeyCallFun(data, tableName) {
  const columnEntries = data.map(item => {
    if (item.dataType === 'FOREIGN KEY') {
      console.log("allTableConfig[item.foreignKey---------->>>>",item.foreignKey)
      const foreignKeyUrl = allTableConfig[item.foreignKey] || `/${item.foreignKey}`;
      return `
        fetchDataAndSetState('${foreignKeyUrl}', set${item.columnName}Key);
      `;
    }
    
  })
  const jsCode = columnEntries.join('');

  return jsCode;
}
function ApiCallData(data, tableName) {
  const columnEntries = data.map(item =>{
    if (item.dataType === 'FOREIGN KEY') {
    return `
  const [${item.columnName}Key, set${item.columnName}Key] = useState([]);
  `}})
  const jsCode = columnEntries.join('');

  return jsCode;
}
function convertToJavascriptMapData(data, tableName) {
  const columnEntries = data.map(item => `
    ${item.columnName}: record?.${item.columnName}
  `)
  const jsCode = `
  ${columnEntries}
  `;

  return jsCode;
}
const allTableConfig = 
{
  carlists: '/carlists',
  attendances: '/attendance',
  clients: '/clients',
  departments: '/department',
  designations: '/designation',
  emailtemplates: '/email-templates',
  modules: '/modules',
  statuses: '/status',
  users: '/users',
}
const generateBackEnd = async (modelData, tableName, columnArray, folder) => {
   generateModel(modelData, tableName, folder);
   generateService(tableName, folder);
   generateController(tableName, folder);
   generateRoute(columnArray, tableName, folder);
};
module.exports = { generateFrontEnd, absolutePath, generateBackEnd };
