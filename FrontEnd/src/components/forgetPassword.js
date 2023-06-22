import React, {useEffect, useState} from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField'
import { Link, useNavigate } from "react-router-dom";
import './comaon.css';
import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import RadioButtonsGroup from "../sharedComponents/radioButton";
import BasicPhoneInput from "../sharedComponents/phoneInput";
import Button from '@mui/material/Button';
import { signupSchemaCompany, signupSchemaUser } from "../Yup Schema";
import { useDispatch } from "react-redux";
import { emailVerification } from "../actions/Auth/passwordReset";
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff'
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
        background: theme.palette.white?.main,
        padding: "40px 20px 20px 20px",
        borderRadius: 10,
        position: "relative",
        margin: "20px 0",
      },
      btn: {
        display:'flex',
        borderRadius: 10,
        height:50,
        width:170,
        fontWeight: 600,
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});
function ForgetPassword() {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: ""
  };

  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: initialValues,
      validate: () => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Please enter your email";
        } else if (!regex.test(values.email)) {
          errors.email = "Email must be a valid email";
        }
        return errors;
      },
      onSubmit: async (values, action) => {
          dispatch(
            emailVerification({
              email: values.email
            },
            )
          );
  

      },
    });

    console.log("forget password",values)

  return (
<>
<section >
  <form onSubmit={handleSubmit}>
<Grid style={{height:'100vh'}} container flexDirection='row' display='flex' justifyContent='' spacing={2} sx={{p:1}}>
     
     <Grid display='flex' justifyContent='center' alignItems='center' item sm={12} md={6}  sx={{backgroundColor:'#3B5999'}}>
   <img src="/assets/Background.png" className='w-50 p-4 img-fluid' ></img>
     </Grid>
     <Grid item spacing={2} padding={10} justifyContent='start' alignContent='flex-start' alignItems='start' container md={6}  sm={12}>
    <Grid item sm={12} sx={{textAlign:'start'}}>
    <Typography sx={{mt:2}} variant="h1" >
    Forget Password
            </Typography> 
    </Grid>
                <>
 
            <MUITextField
              sm={6}
              xs={12}
              id="email"
              name="email"
              placeholder='Email'
              value={values.email}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            /> 
            <Grid item sm={6}></Grid>
            </>
               
            <Grid item sx={{display:'flex', alignItems:'center'}}>
            <Button
                  className={classes.btn}
                 variant="contained"
                 type='submit'
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
              Submit
               </Button> 
               <Typography variant="body" sx={{ml:3}} >
               Have an account? <span > <Link to="/">Sign In</Link></span>
            </Typography> 
            </Grid>
      
              
     </Grid>
 
  
                     
      </Grid>
      </form>
</section>


</>
  );
}

export default ForgetPassword;

