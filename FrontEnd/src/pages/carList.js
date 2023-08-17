
import React, { useEffect,useState } from "react";
import { pushNotification } from "../utils/notifications";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import EditIcon from '@mui/icons-material/Edit';
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import { carList } from "../configs/tableConfig";
import AddIcon from '@mui/icons-material/Add';
import { loderTrue,loderFalse } from "../actions/Auth";
import { useFormik } from "formik";
import { createcarList, deletecarList , updatecarList , getcarList } from "../actions/carList";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import MUITextField from "../sharedComponents/textField";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Header from '../components/navBar'
import Footer from '../components/footer'
import SideMenu from '../pages/sideMenu'
import * as Yup from "yup";
import DeleteModal from "../sharedComponents/deleteModal";
import CARLISTModel from "../sharedComponents/carListModel";
export default function CARLIST() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const [userData, setUserData] = React.useState({});
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
    descending: true,
  });
  const [totalRecords, setTotalRecords] = useState(0);
  const designationScema = Yup.object({
    designationIdCreate: Yup.string().required("Field is required"),
  })
  const initialValues = {
    designationId: '',
    designationIdCreate: '',
  };
  const dispatch = useDispatch();

  const list = useSelector(
    (state) => state?.carList?.data
  );

  useEffect(() => {

     
    getAllUser()
    

  }, []);

const getAllUser=()=>{
  dispatch(getcarList({filter:filter}))
}



  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      validationSchema: designationScema,
      onSubmit: () => {
          dispatch( createcarList({data:{departmentName:values.designationIdCreate},type:'department'}));
        
      },
    });

  const sideList =[]
  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
    name: record?.name
  ,
    carClour: record?.carClour
  ,
    carPrice: record?.carPrice
  
  
      ,
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
      setAction("update");
      setUserData(data);
      setShowModal(true);
    }

  }
  const handleDeleteModel = () => {
    dispatch(deletecarList({id:userDeleteId}));
    setShowDeleteModal(false)
    setTimeout(() => {
      getAllUser()
      }, 2000);
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
          alignItems:"center",  marginBottom:"25px" ,justifyContent:'flex-end'}}>


    <div style={{display:"flex",  justifyContent:"flex-end"}}>

   <IconButton sx={{mt:3,ml:1}} onClick={()=>setShowModal(true)} size="medium" style={{backgroundColor:"#0075FF", color:"white",}}>
            <AddIcon />
          </IconButton>
         </div>
             </div>
             </form>
         <MUITable
            
            column={carList}
            list={normalizeTableProgram(list?.results ? list?.results : [])}       
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
       <CARLISTModel
       showModal={showModal}
        setShowModal={setShowModal}
        action={action}
        setUserData={setUserData}
        userData={userData}
        getAllUser={getAllUser}
        setAction={setAction}

      />
    </>
  );
}
