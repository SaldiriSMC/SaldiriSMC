import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
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
    name: "",
  };
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      // setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const designationScema = Yup.object({
    name: Yup.string().required("Field is required").matches(/^[a-zA-Z]+$/, 'Table Name can only contain letters with out space'),
  })
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [isCreate, setIsCreate] = useState(false)
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      validationSchema: designationScema,
      onSubmit: () => {
        const payload = {
          tableName:values.name,
          columnArray:inputSets
        }
        setIsLoading(true)
        addTable(payload, (progress) => {
          setProgress(progress);
        })
        .then((response) => {
          if (response.data) {
            // setIsLoading(false)
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

console.log("allTableList------------",allTableList)

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


    const handleInputChange = (index, event) => {

      const { name, value } = event.target;
      const updatedInputSets = [...inputSets];
      updatedInputSets[index][name] = value;
      setInputSets(updatedInputSets);
    };

    const handleAddInputSet = () => {
      setInputSets([...inputSets, { columnName: '', dataType: '' }]);
    };

    const handleDeleteInputSet = (index) => {
      const updatedInputSets = inputSets.filter((_, i) => i !== index);
      setInputSets(updatedInputSets);
    };


    const handleSubmitFun = (event) => {

  
    };
    const generateAndDownloadZip = () => {
      const fileData = [
        { path: '/tempFiles/routingStep1.js', newName: 'src/App.js' },
        { path: '/tempFiles/addInMenu.js', newName: 'pages/addInMenu.js' },
        { path: '/tempFiles/tableFile.js', newName: `pages/${values.name}.js` },
        { path: '/tempFiles/tableConfig.js', newName: 'configs/tableConfig.js' },
        { path: '/tempFiles/action/actionTypes.js', newName: `action/actionTypes.js` },
        { path: '/tempFiles/action/index.js', newName: `action/index.js` },
        { path: '/tempFiles/SagaFile.js', newName: `sagas/${values.name}Saga.js` },
        { path: '/tempFiles/rootSga.js', newName: `sagas/rootSaga.js` },
        { path: '/tempFiles/ReducerFile.js', newName: `reducer/${values.name}Reducer.js` },
        { path: '/tempFiles/rootReducer.js', newName: `reducer/rootReducer.js` },
        { path: '/tempFiles/url.js', newName: `constants/urls.js` },

      ];

      const replacements = [
        { placeholder: '#tableName', replacement: values.name },
        { placeholder: '#tableTitle', replacement: values.name.toUpperCase() },
        { placeholder: '#tableTitle', replacement: values.name.toUpperCase() },

      ];
      const zip = new JSZip();
      const fetchAndProcessFiles = fileData.map(fileInfo => {
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
                  const jsCodea = convertToJavascript(inputSets, values.name);
                  
                  newCode = newCode.replace('#tableName', jsCodea);

                } else {
                  newCode = newCode.replaceAll(replacement.placeholder, replacement.replacement);
                }

              });
              if (path == '/tempFiles/action/actionTypes.js'  || path ==  '/tempFiles/action/index.js'){
                const subfolder = folder.folder(`${values.name}`);
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
          saveAs(zipBlob, 'downloaded_files.zip');
        })
        .catch(error => {
          console.error('Error generating and downloading zip archive:', error);
        });
    }; 
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

     
  
    }
    function convertToJavascript(data, tableName) {
      const columnEntries = data.map(item => `
      {
        id: "${item.columnName}",
        name: "${item.columnName}",
        renderer: 'Text',
        align: "left",
        label: "${item.columnName}",
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
              name="columnName"
              value={inputSet.columnName}
              handleChange={(event) => handleInputChange(index, event)}
              variant='inner'
              id="columnName"
              placeholder='Column Name'

            /> 
              <MUITextField
              sm={3}
              xs={12}
              label='Column Type'
              name="dataType"
              value={inputSet.dataType}
              handleChange={(event) => handleInputChange(index, event)}
               variant='inner'
              id="dataType"
              placeholder='Column Type'
              type="select"
              options={columnTypes}
              pass="column"
            /> 
            {inputSet.dataType === 'FOREIGN KEY' && (    <MUITextField
              sm={3}
              xs={12}
              label='Foreign Key'
              name="foreignKey"
              value={inputSet.foreignKey}
              handleChange={(event) => handleInputChange(index, event)}
               variant='inner'
              id="foreignKey"
              placeholder='Foreign Key'

              type="select"
              options={primaryKeys}
              pass="primaryKeys"
            />)}
            
                     <IconButton  onClick={handleAddInputSet} sx={{mt:6,ml:2}}   size="medium" style={{backgroundColor:"#0075FF", color:"white",width:'40px',height:'40px'}} >
            <AddIcon />
          </IconButton> 
          {index > 0 && ( <IconButton onClick={() => handleDeleteInputSet(index)} sx={{mt:6,ml:2}}   size="medium" style={{backgroundColor:"#0075FF", color:"white",width:'40px',height:'40px'}} >
            <DeleteIcon />
          </IconButton> ) }
 
 {!(inputSet.dataType === 'FOREIGN KEY') && (
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
  
      <button  onClick={generateAndDownloadZip}>files</button>
      </Box>
    </>
  );
}
