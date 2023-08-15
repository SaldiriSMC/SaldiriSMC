import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import MUITable from "../sharedComponents/MUITable";
import * as Yup from "yup";
import MUITextField from "../sharedComponents/textField";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { tableConfig } from "../configs/tableConfig";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/navBar";
import Footer from "../components/footer";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import SideMenu from "../pages/sideMenu";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import {
  getAllPrimaryKey,
  addTable,
  getAllTableList
} from "../service/users";

import IconButton from '@mui/material/IconButton';
export default function DynamicTable() {
  const theme = useTheme();
  const initialValues = {
    name: "", // Initial value for the 'name' field
    inputSets: [
      { columnName: "", dataType: "", foreignKey: "" }, // Initial value for the dynamic input sets
    ],
  };
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [sorting, setSorting] = React.useState('asc');
  React.useEffect(() => {
    const timer = setInterval(() => {
      // setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  function checkArrayValidity(dataArray) {
    for (const item of dataArray) {
        if (!item.columnName || !item.dataType) {
            throw new Error("Array contains objects with missing data");
        }
    }
}
const designationScema = Yup.object({
  name: Yup.string().required("Table Name is required").matches(/^[a-zA-Z]+$/, 'Table Name can only contain letters with out space'),
  inputSets: Yup.array().of(
    Yup.object().shape({
      columnName: Yup.string().required("Column Name is required"),
      dataType: Yup.string().required("Column Type is required"),
      foreignKey: Yup.string().when('dataType', (dataType, schema) => {
        if (dataType == 'FOREIGN KEY') {
            return Yup.string()
            .required('Field is required')
        } else {
            return schema
        }
    }),
    })
  ),
});
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [isCreate, setIsCreate] = useState(false)
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      validationSchema: designationScema,
      onSubmit: () => {
        const filteredArray = removeEmptyKeysFromObjects(values.inputSets);
          const payload = {
            tableName:values.name,
            columnArray:filteredArray
          }
          setIsLoading(true)
          addTable(payload, (progress) => {
            setProgress(progress);
          })
          .then((response) => {
            if (response.data) {
              const blob = new Blob([response.data], { type: 'application/zip' });
              const blobUrl = URL.createObjectURL(blob);
          
              const link = document.createElement('a');
              link.href = blobUrl;
              link.download = 'downloaded-file.zip';
          
              link.click();
          
              URL.revokeObjectURL(blobUrl);
              setIsLoading(false)
            }
          })
          .catch((error) => console.log(error.message))
          .finally(() => {
        });
 
      },
    });

  const [inputSets, setInputSets] = useState([
    { columnName: '', dataType: '' },
    // Initial input sets
  ]);
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const [totalRecords, setTotalRecords] = useState(0);
  const [columnTypes, setColumnTypes] = useState([
    { name: 'Int', value: 'int' },
    { name: 'VARCHAR', value: 'VARCHAR(255)' },
    { name: 'Boolean', value: 'boolean' },
    { name: 'FOREIGN KEY', value: 'FOREIGN KEY' },
    // Initial input sets
  ]);
  const [primaryKeys, setprimaryKeys] = useState([])
  const [allTableList, setAllTableList] = useState([])
  const [primaryKeyTypes, setPrimaryKeyTypes] = useState([
    { name: 'a', value: 'a' },
    { name: 'b', value: 'b' },
    { name: 'c', value: 'c' },
    { name: 'd', value: 'd' },
    // Initial input sets
  ]);

console.log("errors------------",errors)

  useEffect(()=>{
        
    getAllPrimaryKey()
    .then((response) => {
      if (response.data) {
        setprimaryKeys(response.data)
      }
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
  });


    getAllTableList()
    .then((response) => {
      if (response.data) {
        setAllTableList(response.data)
      }
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
  });

  
  },[])
  function removeEmptyKeysFromObjects(arr) {
    return arr.map(obj => {
      const newObj = {};
      for (const key in obj) {
        if (obj[key] !== "") {
          newObj[key] = obj[key];
        }
      }
      return newObj;
    });
  }

    const handleInputChange = (index, event) => {

      const { name, value } = event.target;
      const updatedInputSets = [...inputSets];
      updatedInputSets[index][name] = value;
      setInputSets(updatedInputSets);
    };

    const handleAddInputSet = () => {
      setInputSets([...inputSets, { columnName: '', dataType: '' }]);
      const newInputSet = { columnName: '', dataType: '',foreignKey:''};

      setFieldValue('inputSets', [...values.inputSets, newInputSet]);
    };

    const handleDeleteInputSet = (index) => {
      const updatedInputSets = inputSets.filter((_, i) => i !== index);
      const updatedInputSetsi = values.inputSets.filter((_, i) => i !== index);
      setInputSets(updatedInputSets);
      setFieldValue('inputSets', updatedInputSetsi);
    };


    const handleSubmitFun = (event) => {

  
    };
    const generateAndDownloadZip = (tableName,ColumnsList) => {
      setIsLoading(true)
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

        return fetch(path)
          .then(response => response.text())
          .then(jsCode => {
            let newCode = jsCode;
         
              replacements.forEach(replacement => {

          
                if (path == '/tempFiles/tableConfig.js'){
                  const jsCodea = convertToJavascript(ColumnsList, tableName);
                  
                  newCode = newCode.replace('#tableName', jsCodea);

                } else if (path == '/tempFiles/tableModel.js') {
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
          });
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
    const normalizeTableProgram= (source) => {
      const result = [];
      source.forEach((record,index) => {
        result.push({
          name: record?.Tables_in_techteam,
          columns: '1',
          tableDate: '-',
          action: {
            change: (val) =>
            handleDropdownActionsupport(record, val,index),
          },
        });
      });
      return result;
    };


    const handleDropdownActionsupport= (data, val,index) => {
    
      if (val == 'download'){

        const blob = new Blob([data], { type: 'application/zip' });
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = 'table-files.zip';
        link.click();
        URL.revokeObjectURL(blobUrl);
      }
     
  
    }

    const handlePageChange = (e, newPage) => {
      setFilter({
        ...filter,
        pageNumber: newPage + 1,
      });
    };
  
    const handlePageSizeChange = (e) => {
      setFilter({
        ...filter,
        pageNumber: 1,
        pageSize: e.target.value,
      });
    };

    function LinearProgressWithLabel(props) {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" {...props} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              props.value,
            )}%`}</Typography>
          </Box>
        </Box>
      );
    }



    console.log("values--------",values)
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideMenu />
        <Grid
        container
        flexDirection="row"
        display="flex"
        justifyContent=""
        sx={{ p: 1 }}
      >
          { !isCreate ? (
            <Grid
          sx={{ pl: 3 }}
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          item
          sm={6}
          md={6}
        >    
             <div style={{display:"flex",
          alignItems:"flex-end"}}>
              <Grid  container   spacing={2} sx={{p:1,justifyContent:"flex-end"}}>
              <div style={{display:"flex", justifyContent:"flex-end"}}>

                <IconButton onClick={()=>setIsCreate(true)} sx={{mt:3,ml:1}} type="submit" size="medium" style={{backgroundColor:"#0075FF", color:"white",}}>
         <AddIcon />
       </IconButton>
      </div>
              </Grid>
             </div>
             <div style={{display:"flex",
              alignItems:"center"}}>
              <MUITable
             setSorting={setSorting}
            column={tableConfig}
            list={normalizeTableProgram(allTableList)}
            pagination={allTableList.length > 0 ? (
              {
                totalRecords: allTableList.length,
                pageNumber: filter.pageNumber - 1,
                pageSize: filter.pageSize,
                onChangePageNumber: handlePageChange,
                onChangePageSize: handlePageSizeChange,
              }
            ) : null}
          />
             </div>       
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              my: 3,
            }}
          ></Grid>
        </Grid>
          ) : (
<Grid
          sx={{ pl: 3 }}
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          item
          sm={12}
          md={12}
        >
           <form onSubmit={handleSubmit}>
             <div style={{display:"flex",
          alignItems:"center"}}>
              <Grid  container  spacing={2} sx={{p:1}}>
             <MUITextField          
              sm={6}
              variant='inner'
              label='Table Name'
              xs={6}
              name="name"
              value={values.name}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="name"
              errors={errors.name}
              touched={touched.name}
              placeholder='Table Name'
            /> 
               
              </Grid>
             </div>
             <div style={{display:"flex",
              alignItems:"center"}}>
              <Grid  container  spacing={2} sx={{p:1}}>

              {inputSets.map((inputSet, index) => ( <>
                <MUITextField
      sm={3}
      label='Column Name'
      xs={6}
      name={`inputSets[${index}].columnName`} // Use array notation to target dynamic fields
      value={values.inputSets[index]?.columnName || ''}
      handleChange={handleChange}
      id={`inputSets[${index}].columnName`}
      placeholder='Column Name'
      errors={errors.inputSets?.[index]?.columnName}
      touched={touched.inputSets?.[index]?.columnName}
    />

                <MUITextField
      sm={3}
      label='Column Type'
      xs={6}
      name={`inputSets[${index}].dataType`} // Use array notation to target dynamic fields
      value={values.inputSets[index]?.dataType || ''}
      handleChange={handleChange}
      id={`inputSets[${index}].dataType`}
      placeholder='Column Type'
      type="select"
              options={columnTypes}
              pass="column"
              errors={errors.inputSets?.[index]?.dataType}
              touched={touched.inputSets?.[index]?.dataType}
    />
         {values.inputSets[index]?.dataType === 'FOREIGN KEY' && (
      <MUITextField
        sm={3}
        xs={12}
        label='Foreign Key'
        name={`inputSets[${index}].foreignKey`}
        value={values.inputSets[index]?.foreignKey || ''}
        handleChange={handleChange} 
        id={`inputSets[${index}].foreignKey`}
        placeholder='Foreign Key'
        type="select"
        options={primaryKeys}
        pass="primaryKeys"
        errors={errors.inputSets?.[index]?.foreignKey}
        touched={touched.inputSets?.[index]?.foreignKey}
      />
    )}
            
                     <IconButton  onClick={handleAddInputSet} sx={{mt:6,ml:2}}   size="medium" style={{backgroundColor:"#0075FF", color:"white",width:'40px',height:'40px'}} >
            <AddIcon />
          </IconButton> 
          {index > 0 && ( <IconButton onClick={() => handleDeleteInputSet(index)} sx={{mt:6,ml:2}}   size="medium" style={{backgroundColor:"#0075FF", color:"white",width:'40px',height:'40px'}} >
            <DeleteIcon />
          </IconButton> ) }
 
 {!(values.inputSets[index]?.dataType === 'FOREIGN KEY') && (
  <Grid item sm={4}></Grid>
 )}
              </>))}
        <div style={{textAlign:'end'}}>
        <Button
                 sx={{ml:2,mt:5}}
                 variant="contained"
                 type='submit'
                 color="primary"
                //  onClick={()=>handleSubmitFun()}
                 style={{  width:130,height:50}}
               >
              Create Form
               </Button> 
              <Button
                 sx={{ml:2,mt:5}}
                 variant="contained"
                 type='submit'
                 color="primary"
                 onClick={()=>setIsCreate(false)}
                 style={{  width:130,height:50}}
               >
              Cancel Form
               </Button> 
        </div>
        {isLoading && (
             <Grid item sm={12}>      <Box sx={{ width: '50%' }}>
             {progress == '100' && (
              'All Files Download '
             )} 
             <LinearProgressWithLabel value={progress} />
           </Box></Grid>
        )}

  
              </Grid>
             </div>


             </form>

         
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              my: 3,
            }}
          ></Grid>
        </Grid>
          )}
                
      </Grid>
  
      {/* <button  onClick={()=>generateAndDownloadZip(values.name,inputSets)}>files</button> */}
      </Box>
    </>
  );
}
