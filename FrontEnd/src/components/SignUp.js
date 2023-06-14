import React, {useState} from 'react';
import { useFormik } from "formik";
import { makeStyles } from 'tss-react/mui';
import { Link, useNavigate } from "react-router-dom";
import './comaon.css';
import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { signupSchema } from "../Yup Schema";
import { useDispatch } from "react-redux";
import { signUp } from "../actions/Auth";
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
function Technologies() {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
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
          signUp({
            credentials:{first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            country: values.country,
            phone: values.phone,
            password: values.password,
            password2: values.confirmPassword,
            user_type: values.profession},
          })
        );
        action.resetForm()
      },
    });
console.log("errors",errors)
  return (
<>
<section >
  <form onSubmit={handleSubmit}>
<Grid container flexDirection='row' display='flex' justifyContent='flex-end' spacing={2} sx={{p:1}}>
     
     <Grid display='flex' justifyContent='center' alignItems='center' item sm={6} sx={{backgroundColor:'#3B5999'}}>
   <img src="/assets/Background.png" className='w-50 p-4 img-fluid' ></img>
     </Grid>
     <Grid item spacing={2} padding={10} container sm={6}>
    <Grid item sm={12} sx={{textAlign:'start'}}>
    <Typography variant="body" >
    Start, Run and Grow Your Business
            </Typography> 
    </Grid>
          <MUITextField
               noTitle
               placeholder='Company Name'
              sm={6}
              xs={6}
              id="firstName"
              name="firstName"
              value={values.firstName}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.firstName}
              touched={touched.firstName}
            /> 
            <MUITextField
               noTitle
              sm={6}
              xs={6}
              name="lastName"
              value={values.lastName}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="lastName"
              placeholder='Last Name'
              errors={errors.lastName}
              touched={touched.lastName}
            /> 
            <MUITextField
              noTitle
              sm={12}
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
            <MUITextField
            noTitle
              sm={6}
              xs={6}
              id="password"
              name="password"
              placeholder='Password '
              value={values.password}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            /> 
          <MUITextField
              noTitle
              sm={6}
              xs={6}
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Confirm Password'
              value={values.confirmPassword}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            /> 
            <MUITextField
               noTitle
              sm={12}
              xs={12}
              id="phone"
              name="phone"
              placeholder='Phone Number'
              value={values.phone}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.phone}
              touched={touched.phone}
            /> 
            <MUITextField
              sm={12}
              xs={12}
              id="country"
              name="country"
              placeholder='Country'
              value={values.country}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.country}
              touched={touched.country}
            /> 
            <Grid item sx={{display:'flex', alignItems:'center'}}>
            <Button
                  className={classes.btn}
                 variant="contained"
                 type='submit'
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
               SIGN UP
               </Button> 
               <Typography variant="body" sx={{ml:3}} >
               Have an account? <span className='text-blue'>Sign In </span>
            </Typography> 
            </Grid>
                     
     </Grid>
 
  
                     
      </Grid>
      </form>
</section>


</>
  );
}

export default Technologies;

