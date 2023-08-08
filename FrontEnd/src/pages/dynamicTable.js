import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
import MUITextField from "../sharedComponents/textField";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/navBar";
import Footer from "../components/footer";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SideMenu from "../pages/sideMenu";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import {
  getAllPrimaryKey,
  addTable
} from "../service/users";
import IconButton from '@mui/material/IconButton';
export default function DynamicTable() {
  const theme = useTheme();
  const initialValues = {
    name: "",
  };
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [inputSets, setInputSets] = useState([
    { columnName: '', dataType: '' },
    // Initial input sets
  ]);
  const [columnTypes, setColumnTypes] = useState([
    { name: 'Int', value: 'int' },
    { name: 'VARCHAR', value: 'VARCHAR' },
    { name: 'Boolean', value: 'boolean' },
    { name: 'Primary key', value: 'int' },
    // Initial input sets
  ]);
  const [primaryKeys, setprimaryKeys] = useState([])
  const [primaryKeyTypes, setPrimaryKeyTypes] = useState([
    { name: 'a', value: 'a' },
    { name: 'b', value: 'b' },
    { name: 'c', value: 'c' },
    { name: 'd', value: 'd' },
    // Initial input sets
  ]);



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

  
  },[])
  console.log("inputSets-------->>>>...",inputSets)

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


    const handleSubmit = (event) => {

      const payload = {
        tableName:name,
        columnArray:inputSets
      }
      addTable(payload)
      .then((response) => {
        if (response.data) {

        }
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
    });
    };

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
          
        <Grid
          sx={{ pl: 3 }}
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          item
          sm={12}
          md={12}
        >
         
             <div style={{display:"flex",
          alignItems:"center"}}>
              <Grid  container  spacing={2} sx={{p:1}}>
             <MUITextField          
              sm={6}
              variant='inner'
              label='Table Name'
              xs={6}
              name="status"
              value={name}
              handleChange={(e) => setName(e.target.value)}
              id="status"
              placeholder='Table Name'
            /> 
               <Button
                 sx={{ml:2,mt:5}}
                 variant="contained"
                 type='submit'
                 color="primary"
                 onClick={()=>handleSubmit()}
                 style={{  width:130,height:50}}
               >
              Create Form
               </Button> 
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
            {inputSet.dataType === 'int' && (    <MUITextField
              sm={3}
              xs={12}
              label='Primary Keys'
              name="primaryKey"
              value={inputSet.primaryKey}
              handleChange={(event) => handleInputChange(index, event)}
               variant='inner'
              id="primaryKey"
              placeholder='Column Type'

              type="select"
              options={primaryKeys}
              pass="primaryKeys"
            />)}
            
                     <IconButton  onClick={handleAddInputSet} sx={{mt:6,ml:2}}  type="submit"  size="medium" style={{backgroundColor:"#0075FF", color:"white",width:'40px',height:'40px'}} >
            <AddIcon />
          </IconButton> 
          {index > 0 && ( <IconButton onClick={() => handleDeleteInputSet(index)} sx={{mt:6,ml:2}}  type="submit"  size="medium" style={{backgroundColor:"#0075FF", color:"white",width:'40px',height:'40px'}} >
            <DeleteIcon />
          </IconButton> ) }
 
 {!(inputSet.dataType === 'int') && (
  <Grid item sm={4}></Grid>
 )}
              </>))}
        
      
           
              </Grid>
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
        <Grid
          item
          spacing={2}
          justifyContent="center"
          alignContent="flex-start"
          alignItems="start"
          container
          md={6}
          sm={12}
        >
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
          </>
        </Grid>
        
      </Grid>
  
        
      </Box>
    </>
  );
}
