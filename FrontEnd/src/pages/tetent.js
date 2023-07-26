
import React, { useEffect,useState } from "react";
import { pushNotification } from "../utils/notifications";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import EditIcon from '@mui/icons-material/Edit';
import { designationConfig } from "../configs/tableConfig";
import AddIcon from '@mui/icons-material/Add';
import { loderTrue,loderFalse } from "../actions/Auth";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import MUITextField from "../sharedComponents/textField";
import * as Yup from "yup";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Header from '../components/navBar'
import Footer from '../components/footer'
import SideMenu from '../pages/sideMenu'
import { getRoll,createRoll ,deleteRoll, updateRoll} from "../actions/AddRols";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../sharedComponents/deleteModal";

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null); 
   const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const designationScema = Yup.object({
    designationId: Yup.string().required("Field is required"),
  })
  const initialValues = {
    designationId: '',
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
      dispatch(getRoll({type:'designation'}));
      handleReset()
    }
   
  }, [dataUpdate]);
  

  
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      validationSchema: designationScema,
      onSubmit: () => {

        if (action){
          setAction(false)
          dispatch(updateRoll({data:{designationName:values.designationId},type:'designation',id:action}));
        } else{
          dispatch(createRoll({data:{designationName:values.designationId},type:'designation'}));
        }
      },
    });



const addRollFun =()=>{
 

}


  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
        name: record?.designationName,
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
      setShowDeleteModal(true)
      setUserDeleteId(data?.id)
     
    }  
    
    if (val === 'edit' ) {
      setAction(data?.id)
     setFieldValue('designationId',data.designationName)
    }

  }

  const handleDeleteModel = () => {
    dispatch(deleteRoll({type:'designation',id:userDeleteId}));
    setShowDeleteModal(false)
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
           <form onSubmit={handleSubmit}>
             <div style={{display:"flex",
          alignItems:"center",  marginBottom:"25px"}}>

             <MUITextField
               noTitle
              sm={6}
              xs={6}
              name="designationId"
              value={values.designationId}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="designationId"
              placeholder='Designation Name'
              errors={errors.designationId}
              touched={touched.designationId}

            /> 
    <div style={{display:"flex", justifyContent:"flex-end"}}>

      {!action ?      <IconButton type="submit" sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} >
            <AddIcon />
          </IconButton> :  <IconButton type="submit" sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} >
            <EditIcon />
          </IconButton>  }
     
       
         </div>
             </div>
             </form>
         <MUITable
            
            column={designationConfig}
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
    <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        handleDeleteModel={handleDeleteModel}

      />
    </>
  );
}
