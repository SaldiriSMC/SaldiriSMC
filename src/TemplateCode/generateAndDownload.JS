const JSZip  = require("jszip")
const  saveAs  = require("file-saver")
const path = require("path")
const fs = require("fs")
const absolutePath = path.resolve(__dirname, '..')
console.log("path------->>>>>",absolutePath)
const generateAndDownloadZip = async (tableName,ColumnsList) => {
    const fileData = [
      { path: '/tempFiles/routingStep1.js', newName: 'src/App.js' },
      { path: '/tempFiles/addInMenu.js', newName: 'pages/addInMenu.js' },
      { path: '/tempFiles/tableFile.js', newName: `pages/${tableName}.js` },
      { path: '/tempFiles/tableConfig.js', newName: 'configs/tableConfig.js' },
      { path: '/tempFiles/action/actionTypes.js', newName: `action/actionTypes.js` },
      { path: '/tempFiles/action/index.js', newName: `action/index.js` },
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
    const zip = new JSZip();
    const fetchAndProcessFiles = fileData.map((fileInfo,index) => {
      const { path, newName } = fileInfo;
      const folderPath = newName.substring(0, newName.lastIndexOf('/'));
      const subfolderPath = folderPath + '/actions';
      const folder = zip.folder(folderPath);
      fs.readFileSync(`${absolutePath}/frontEndFiles${path}`, 'utf8', (err, result)=>{
        if(err){
          console.log("err--------->>>>>>", err)
        }else{
          let newCode = result;
          replacements.forEach(replacement => {
            if (path == `${absolutePath}/frontEndFiles/tempFiles/tableConfig.js`){
              const jsCodea = convertToJavascript(ColumnsList, tableName);
              newCode = newCode.replace('#tableName', jsCodea);
            } else if (path == '${absolutePath}/frontEndFiles/tempFiles/tableModel.js') {
              const jsCodea = convertToJavascriptInpits(ColumnsList, tableName);
              newCode = newCode.replaceAll('#inputArr', tableName).replace('#list', jsCodea);
            } else {
              newCode = newCode.replaceAll(replacement.placeholder, replacement.replacement);
            }
          });
          if (path == '/tempFiles/action/actionTypes.js'  || path ==  '/tempFiles/action/index.js'){
            const subfolder = folder.folder(`${tableName}`);
            subfolder.file(newName.substring(newName.lastIndexOf('/') + 1), newCode);
          } else {
            folder.file(newName.substring(newName.lastIndexOf('/') + 1), newCode);
          }
        }
      })
    });
    Promise.all(fetchAndProcessFiles)
      .then(() => {
        return zip.generateAsync({ type: 'blob' });
      })
      .then(zipBlob => {
        saveAs(zipBlob, 'frontEnd_files.zip');
      })
      .catch(error => {
        console.error('Error generating and downloading zip archive:', error);
      });
  };

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
    const columnEntries = data.map(item => `
    {
      columnName: "",
      columnTitle: "${item.columnName}",
    }`).join(',');
    const jsCode = `
    const [${tableName}, set${tableName}] = useState([
    ${columnEntries},
  ]);
    `;
    return jsCode;
  }
  
  module.exports = { generateAndDownloadZip }