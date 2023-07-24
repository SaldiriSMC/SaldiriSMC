
import React, { useEffect,useState } from "react";
import { pushNotification } from "../utils/notifications";
import EditIcon from '@mui/icons-material/Edit';
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
import { getRoll,createRoll ,deleteRoll, updateRoll} from "../actions/AddRols";
import MUITextField from "../sharedComponents/textField";
import {
  getAllModules,

} from "../service/users";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Header from '../components/navBar'
import Footer from '../components/footer'
import SideMenu from '../pages/sideMenu'
import { chnagePasswordSechmea } from "../Yup Schema";


export default function TetentStatus() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null);
  const [allmodulesList, setallmodulesList] = useState([])
  const initialValues = {
    status: '',
    modulesId: '',
  };
  const dispatch = useDispatch();

  const allRollsList = useSelector(
    (state) => state?.tenetRolls?.allRollsdata?.data
  );

  const dataUpdate = useSelector(
    (state) => state?.tenetRolls?.dataUpdate
  );

  



  
  console.log("allRollsList-----------",allRollsList)
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   valid,
    dirty } =
    useFormik({
      initialValues,
      validationSchema: chnagePasswordSechmea,
      onSubmit: () => {

      },
    });

    useEffect(() => {
      if (dataUpdate){
        dispatch(getRoll({type:'status',id:values.modulesId}));
      }
         
        }, [dataUpdate,values.modulesId]);
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

      dispatch(deleteRoll({type:'status',id:data?.id}));
    }  
    
    if (val === 'edit' ) {
      setAction(data?.id)
     setFieldValue('status',data.statusName)
     setFieldValue('modulesId',data.moduleId)
    }

  }

  const addRollFun =()=>{

    if (valid && dirty){
      if (action){
        setAction(false)
        dispatch(updateRoll({data:{statusName:values.status,moduleId :values.modulesId},type:'status',id:action}));
        handleReset()
      } else{
        dispatch(createRoll({data:{statusName:values.status,moduleId :values.modulesId},type:'status'}));
        handleReset()
      }
    }

  
  }
  useEffect(()=>{
    getAllUser()
  },[])
  
    const getAllUser=()=>{
      dispatch(
        loderTrue(true)
      );
      getAllModules()
      .then((response) => {
        if (response.data) {
          setallmodulesList(response.data.data)
        }
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        dispatch(
          loderFalse(true)
        );
  
    });
  
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
          alignItems:"center"}}>
              <Grid  container  spacing={2} sx={{p:1}}>
              <MUITextField
              sm={6}
              xs={12}
              name="modulesId"
              value={values.modulesId}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="modulesId"
              
              placeholder='department'
              errors={errors.departmentId}
              touched={touched.departmentId}
              type="select"
              options={allmodulesList}
              pass="module"
            /> 
             <MUITextField
               
              sm={6}
              xs={6}
              name="status"
              value={values.status}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="status"
              placeholder='Status Name'

            /> 


              </Grid>

             </div>
             <div style={{display:"flex", justifyContent:"flex-end"}}>

             {!action ?      <IconButton sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",marginBottom:10}} onClick={()=>{
          addRollFun();
          } }>
            <AddIcon />
          </IconButton> :  <IconButton sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",marginBottom:10}} onClick={()=>{
          addRollFun();
          } }>
            <EditIcon />
          </IconButton>  }
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
