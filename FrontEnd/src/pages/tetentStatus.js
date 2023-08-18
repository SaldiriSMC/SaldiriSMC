
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
import { rollStatusSechmea } from "../Yup Schema";
import DeleteModal from "../sharedComponents/deleteModal";
import UpdateModel from "../sharedComponents/tenentModel";
export default function TetentStatus() {
  const theme = useTheme();

  const [action, setAction] = React.useState(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const [allmodulesList, setallmodulesList] = useState([])
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
    sortBy:'desc',
    columnName:'createdAt'
  });
  const [totalRecords, setTotalRecords] = useState(0);
  const initialValues = {
    status: '',
    modulesId: '',
    statusEdit: '',
  };
  const dispatch = useDispatch();

  const allRollsList = useSelector(
    (state) => state?.tenetRolls?.allRollsdata.data
  );

  const dataUpdate = useSelector(
    (state) => state?.tenetRolls?.dataUpdate
  );

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
          dispatch(getRoll({type:'status',id:values.modulesId,filter:filter}));
          setTimeout(() => {
            setFieldValue('status','')
          }, 1000);
         
        }
        
      }
         
        }, [dataUpdate,values.modulesId,filter]);



  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
        statusName: record?.statusName,
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
    getAllUser()
  },[])
  
    const getAllUser=()=>{
      getAllModules()
      .then((response) => {
        if (response?.data) {
          setallmodulesList(response.data.data)
          if (response.data.data.length > 0){
            setFieldValue('modulesId',response.data.data[0].id)
          }
          
        }
      })
      .catch((error) =>{
        if (error?.response?.data?.message === 'Please Provide Correct Tenant Key' || error?.response?.data?.message === 'Please authenticate' ){
          localStorage.removeItem("accessToken"); 
          window.location.reload()
        }
      })
      .finally(() => {

  
    });
   
  
    }
    const handleDeleteModel = () => {
      dispatch(deleteRoll({type:'status',id:userDeleteId}));
      setShowDeleteModal(false)
    }

    const handleUpdateModel = () => {
      dispatch(updateRoll({data:{statusName:values.statusEdit,moduleId :values.modulesId},type:'status',id:action}));
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
              placeholder='module'
              errors={errors.modulesId}
              touched={touched.modulesId}
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
              errors={errors.status}
              touched={touched.status}
            /> 
              </Grid>
             </div>
             <div style={{display:"flex", justifyContent:"flex-end"}}>

              <IconButton sx={{mt:3,ml:1}}  type="submit"  size="medium" style={{backgroundColor:"#0075FF", color:"white",marginBottom:10}} >
            <AddIcon />
          </IconButton> 
</div>

</form>

         <MUITable
               setFilter={setFilter}
            column={statusConfig}
            list={normalizeTableProgram(allRollsList?.results ? allRollsList?.results : [])}
            pagination={allRollsList?.totalResults > 0 ? (
              {
                totalRecords: allRollsList?.totalResults,
                pageNumber: filter.pageNumber - 1,
                pageSize: filter.pageSize,
                onChangePageNumber: handlePageChange,
                onChangePageSize: handlePageSizeChange,
              }
            ) : null}
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
        values={values.statusEdit}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        errors={errors}
        id={'statusEdit'}
        title='Status'
        handleUpdateModel={handleUpdateModel}

      />
    </>
  );
}
