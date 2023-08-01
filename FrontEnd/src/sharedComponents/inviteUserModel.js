import React, { useEffect,useState } from "react";
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import * as Yup from "yup";
import Modal from '@mui/material/Modal';
import MUITextField from "../sharedComponents/textField";
import Button from '@mui/material/Button'
import { useFormik } from "formik";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import { loderTrue,loderFalse } from "../actions/Auth";
import { pushNotification } from "../utils/notifications";
import {
  getAllDepartment,
  getAllDesignation,
  createInviteUser,
  updateInviteUser
} from "../service/users";
import Grid from '@mui/material/Grid'
import CancelIcon from '@mui/icons-material/Cancel';
const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            background: theme.palette.white.main,
            borderRadius: 24,
            padding: '10px 10px 10px 10px',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
                width: 'auto'
            },
            [theme.breakpoints.down('sm')]: {
                width: '300px'
            }
        },
        imgFullWidth:{
          width:'100%'
           },
        avatar: {
          width: 160,
          height: 160,
          position: 'absolute',
          top: -90,
          left: 15,
          borderRadius: '100%',
          border: `4px solid red`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: 18,
          marginRight: 15
        },
        uploadFileBtn: {
          position: 'absolute',
          bottom: 0,
          right: 0
        },
        iconWrapper: {
            background: 'rgba(0, 113, 188, 0.08)',
            width: 90,
            height: 90,
            margin: '0 auto 36px',
            borderRadius: '100%',
            position: 'relative'
        },
        checkIcon: {
            fontSize: 40,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        crosWrap:{
          display:'flex',
          justifyContent:'flex-end'
        },
        crosWrap2:{
          display:'flex',
          justifyContent:'flex-start'
        },
        innerContainer: {
          padding: '0px 10px 10px 10px',
          maxHeight: 'calc(100vh - 100px)',
          overflow: 'auto'
        },
        btn: {
          borderRadius: 10,
          height:40,
          marginRight:10,
          width:100,
          fontWeight: 600,
        },
    };
});

const InviteUserModel = (props) => {
    const { 
      showModal, 
      setShowModal,
      userData,
      action,
      setAction,
      getAllUser,
      setLoader,
      setUserData
    } = props
    const { classes } = useStyles();
    const initialValues = {
      designationId: '',
      departmentId:'',
      name:'',
      email:'',
    };
    const dispatch = useDispatch();
    const inviteUserScema = Yup.object({
      designationId: Yup.string().required("Field is required"),
      departmentId:  Yup.string().required("Field is required"),
      name:  Yup.string().required("Field is required"),
      email: Yup
      .string()
      .max(255, "Letters must be less than 255")
      .email('Enter valid email')
      .required('Field is required'),

    })
    const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
      dirty } =
      useFormik({
        initialValues,
        validationSchema:inviteUserScema, 
        onSubmit: () => {

          if (action === 'update'){
            const pauload={...values}
            dispatch(
              loderTrue(true)
            );
            updateInviteUser(pauload,userData.id)
            .then((response) => {
              if (response.data) {
                getAllUser()
                setShowModal(false)
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
                getAllUser()
                setShowModal(false)
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
      const [designationList, setDesignationList] = useState([])
      const [departmentList, setDepartmentList] = useState([])

    
      useEffect(()=>{
        
        getAllDepartment()
        .then((response) => {
          if (response.data) {
            setDepartmentList(response.data.data)
          }
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
    
      });
    
    
        getAllDesignation()
        .then((response) => {
          if (response.data) {
            setDesignationList(response.data.data.filter(item=> item.designationName !=='CEO'))
          }
        })
        .catch((error) => console.log(error.message))
        .finally(() => {
    
      });
    
      },[])

      useEffect(()=>{
        if (action === 'update'){
          setValues({
            ...userData
          })
         
        } else{
            // handleReset()
        }

      },[action])
  
  return (
    <div>
      <Modal
        open={showModal}
        onClose={()=>setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.mainContainer}>
        <div className={classes.crosWrap}>
        <IconButton  aria-label="upload picture" component="label" onClick={()=> {setShowModal(false);setUserData({}); handleReset();setAction(null)}}>
              <CancelIcon />      
            </IconButton>
            </div>
        <div className={classes.innerContainer}>    
        <form onSubmit={handleSubmit}>
        <Grid  container  spacing={2} sx={{p:1}}>
              <MUITextField
              label='Name'
              placeholder='Name'
              sm={6}
              xs={12}
              id="name"
              name="name"
              value={values.name}
              handleChange={handleChange}
              // onBlur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            /> 
            <MUITextField
              sm={6}
              xs={12}
              name="departmentId"
              value={values.departmentId}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="departmentId"
              label='Department'
              placeholder='department'
              errors={errors.departmentId}
              touched={touched.departmentId}
              type="select"
              options={departmentList}
              pass="department"
            />  
               <MUITextField
               sm={6}
               xs={12}
               label='Designation'
              id="designationId"
              name="designationId"
              placeholder='Designation'
              value={values.designationId}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.designationId}
              type="select"
              options={designationList}
              pass="designation"
              touched={touched.designationId}
            />
            
            <MUITextField
              sm={6}
              xs={12}
              id="email"
              label='Email'
              name="email"
              placeholder='Email'
              value={values.email}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            /> 
                 
            </Grid>
       
            <Grid item sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <Button
                  className={classes.btn}
                 variant="contained"
                 color="primary"
                 onClick={()=> {setShowModal(false);setUserData({});handleReset();setAction(null)}}
                 style={{ marginTop: '20px' }}
               >
            Cancel
               </Button> 
            <Button
                  className={classes.btn}
                 variant="contained"
                 type='submit'
                 color="primary"
                 style={{ marginTop: '20px' }}
               >
               Save
               </Button> 
            </Grid>
            </form>
          </div>  
        </Box>
       
      </Modal>
    </div>
  );
};

export default InviteUserModel;