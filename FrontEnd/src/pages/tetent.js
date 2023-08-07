
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
import UpdateModel from "../sharedComponents/tenentModel";

export default function PersistentDrawerLeft() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null); 
   const [showDeleteModal, setShowDeleteModal] = React.useState(false);
   const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5
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
  const allRollsList = useSelector(
    (state) => state?.tenetRolls?.allRollsdata
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
          dispatch(createRoll({data:{designationName:values.designationIdCreate},type:'designation'}));
        
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
     setFieldValue('designationId',data.designationName)
    }

  }

  const handleDeleteModel = () => {
    dispatch(deleteRoll({type:'designation',id:userDeleteId}));
    setShowDeleteModal(false)
  }

  const handleUpdateModel = () => {
    dispatch(updateRoll({data:{designationName:values.designationId},type:'designation',id:action}));
    setShowUpdateModal(false)
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
          alignItems:"center",  marginBottom:"25px"}}>

             <MUITextField
               noTitle
              sm={6}
              xs={6}
              name="designationIdCreate"
              value={values.designationIdCreate}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="designationIdCreate"
              placeholder='Designation Name'
              errors={errors.designationIdCreate}
              touched={touched.designationIdCreate}

            /> 
    <div style={{display:"flex", justifyContent:"flex-end"}}>

     <IconButton type="submit" sx={{mt:3,ml:1}}  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} >
            <AddIcon />
          </IconButton>
     
       
         </div>
             </div>
             </form>
         <MUITable
            
            column={designationConfig}
            list={normalizeTableProgram(allRollsList?.data ? allRollsList?.data : [])}
            pagination={{
              totalRecords: totalRecords,
              pageNumber: filter.pageNumber - 1,
              pageSize: filter.pageSize,
              onChangePageNumber: handlePageChange,
              onChangePageSize: handlePageSizeChange,
            }}
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
    <UpdateModel
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        values={values.designationId}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        errors={errors}
        id={'designationId'}
        title='Designation'
        handleUpdateModel={handleUpdateModel}

      />
    </>
  );
}
