
import React, { useEffect,useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MUITable from "../sharedComponents/MUITable";
import { queuesConfig } from "../configs/tableConfig";
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
import { rollStatusSechmea } from "../Yup Schema";
import DeleteModal from "../sharedComponents/deleteModal";
import UpdateModel from "../sharedComponents/tenentModel";
export default function Queues() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const [allmodulesList, setallmodulesList] = useState([])
  const initialValues = {
    status: '',
    modulesId: '',
    statusEdit: '',
  };
  const dispatch = useDispatch();

  const allRollsList = useSelector(
    (state) => state?.tenetRolls?.allRollsdata?.data
  );

  const dataUpdate = useSelector(
    (state) => state?.tenetRolls?.dataUpdate
  );


  console.log("allRollsList---------->>>>>>>",allRollsList)

  const [value, setValue] = React.useState('one');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   isValid,
    dirty } =
    useFormik({
      initialValues,
      validationSchema: rollStatusSechmea,
      onSubmit: () => {
          dispatch(createRoll({data:{statusName:values.status,moduleId :values.modulesId},type:'status'}));     
      },
    });

    useEffect(() => {
      if (dataUpdate){
        if (values.modulesId){
          dispatch(getRoll({type:'status',id:values.modulesId}));
          setTimeout(() => {
            setFieldValue('status','')
          }, 1000);
         
        }
        
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
          hideDelteEdit:record?.tenantId == null ? true : false,
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
      setShowUpdateModal(true)
     setFieldValue('statusEdit',data.statusName)
     setFieldValue('modulesId',data.moduleId)
    }

  }
 
  useEffect(()=>{
  
  },[])
  
   

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
   
          justifyContent="flex-end"
          alignItems="center"
          item
          sm={12}
          md={6}
        >
 <Tabs
        value={value}
        onChange={handleChangeTab}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Active" wrapped/>
        <Tab value="two" label="Inactive" />
      </Tabs>
<br></br>
         <MUITable
            
            column={queuesConfig}
            list={normalizeTableProgram([])}

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