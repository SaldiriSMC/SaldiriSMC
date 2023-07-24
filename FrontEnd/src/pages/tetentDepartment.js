
import React, { useEffect,useState } from "react";
import { pushNotification } from "../utils/notifications";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import { departmentConfig } from "../configs/tableConfig";
import AddIcon from '@mui/icons-material/Add';
import { loderTrue,loderFalse } from "../actions/Auth";
import { useFormik } from "formik";
import { getRoll } from "../actions/AddRols";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
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



export default function TetentDepartment() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null);
  const initialValues = {
    designationId: '',
  };
  const dispatch = useDispatch();

  const allRollsList = useSelector(
    (state) => state?.tenetRolls?.allRollsdata?.data
  );
  useEffect(() => {
    dispatch(getRoll({type:'department'}));
  }, []);
  
  console.log("allRollsList-----------",allRollsList)
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      onSubmit: () => {

        if (action === 'update'){
          const pauload={...values}
          dispatch(
            loderTrue(true)
          );
          updateInviteUser(pauload)
          .then((response) => {
            if (response.data) {
              // getAllUser()

              handleReset()
              setAction(null)
            }
            pushNotification(
              `${response?.data?.message}`,
              "success",
            );
          })
          .catch((err) => {
            const { response } = err;
            // setLoader(false)
            pushNotification(
              `${response?.data?.message}`,
              "error",
            );
          })
          .finally(() => {
            dispatch(
              loderFalse(true)
            );
        });

        } else{
          const pauload={...values}
          dispatch(
            loderTrue(true)
          );
          createInviteUser(pauload)
          .then((response) => {
            if (response.data) {
              // getAllUser()
              handleReset()
            }
            pushNotification(
              `${response?.data?.message}`,
              "success",
            );
          })
          .catch((err) => {
            const { response } = err;
            // setLoader(false)
            pushNotification(
              `${response?.data?.message}`,
              "error",
            );
          })
          .finally(() => {
            dispatch(
              loderFalse(true)
            );
        });

        }
      



      },
    });

  const sideList =[]
  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
        name: record?.departmentName,
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
              name="designationId"
              value={values.designationId}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="designationId"
              placeholder='Department Name'

            /> 
    <div style={{display:"flex", justifyContent:"flex-end"}}>

      
         <IconButton sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{
            // setShowModal(true)
          } }>
            <AddIcon />
          </IconButton> 
         </div>
             </div>

         <MUITable
            
            column={departmentConfig}
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
