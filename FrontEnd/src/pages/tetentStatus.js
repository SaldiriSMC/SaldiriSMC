
import React, { useEffect,useState } from "react";
import { pushNotification } from "../utils/notifications";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import { statusConfig } from "../configs/tableConfig";
import AddIcon from '@mui/icons-material/Add';
import { loderTrue,loderFalse } from "../actions/Auth";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getRoll,createRoll } from "../actions/AddRols";
import MUITextField from "../sharedComponents/textField";
import {
  getAllDepartment,
  getAllDesignation,
  createInviteUser,
  updateInviteUser
} from "../service/users";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Header from '../components/navBar'
import Footer from '../components/footer'
import SideMenu from '../pages/sideMenu'



export default function TetentStatus() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null);
  const initialValues = {
    status: '',
  };
  const dispatch = useDispatch();

  const allRollsList = useSelector(
    (state) => state?.tenetRolls?.allRollsdata?.data
  );

  const dataUpdate = useSelector(
    (state) => state?.tenetRolls?.dataUpdate
  );
  useEffect(() => {
if (dataUpdate){
  dispatch(getRoll({type:'status'}));
}
   
  }, [dataUpdate]);
  
const addRollFun =()=>{
  if (values.status){
    dispatch(createRoll({data:{statusName:values.status},type:'status'}));
  }
 
}
  
  console.log("allRollsList-----------",allRollsList)
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      onSubmit: () => {

      },
    });

  const sideList =[]
  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
        name: record?.statusName,
        action: {
          change: (val) =>
          handleDropdownActionsupport(record, val,index),
        },
      });
    });
    return result;
  };
  const handleDropdownActionsupport= (data, val,index) => {

    if (val === 'delete' ) {

     
    }  
    
    if (val === 'edit' ) {
     
    }

  }


  return (
    <>
    <Header/>
    <Box sx={{ display: 'flex' }}>
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
          md={6}
        >
             <div style={{display:"flex",
          alignItems:"center",  marginBottom:"15px"}}>

             <MUITextField
               noTitle
              sm={6}
              xs={6}
              name="status"
              value={values.status}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="status"
              placeholder='Status Name'

            /> 
    <div style={{display:"flex", justifyContent:"flex-end"}}>

      
         <IconButton sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{
           addRollFun()
          } }>
            <AddIcon />
          </IconButton> 
         </div>
             </div>

         <MUITable
            
            column={statusConfig}
            list={normalizeTableProgram(allRollsList ?? [])}

          />
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
