import React, {useEffect, useState} from 'react';
import { useFormik } from "formik";
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
import { signUp } from "../actions/Auth";
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
function Technologies() {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userType, setUserType]=useState('')
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleMouseDownPassword = () => setShowPassword(!showPassword)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)
  const initialValues = {
    tanantName: "",
    fullName: "",
    phone: "",
    designation: "",
    email: "",
    allies: "",
    type: "Company",
    domain: "",
    password: "",
  };
  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userType == 'User' ? signupSchemaUser : signupSchemaCompany,
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
        if (values.type == 'User'){
          dispatch(
            signUp({
              credentials:{
              name: values.fullName,
              email: values.email,
              alias: values.allies,
              designation: values.designation,
              // phone: values.phone,
              password: values.password,},
            })
          );
        } else{
          dispatch(
            signUp({
              credentials:{
              name: values.fullName,
              tanantName: values.tanantName,
              email: values.email,
              alias: values.allies,
              designation: values.designation,
              domain: values.domain,
              // phone: values.phone,
              password: values.password,},
            })
          );
        }

      },
    });
useEffect(()=>{
  if (values.type == 'User'){
    setUserType('User')
  }

},[values.type])
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
            <RadioButtonsGroup
                 directionRow
                  sm={12}
                  xs={12}
                  id="type"
                  name="type"
                  label="Type"
                  value={values.type}
                  setFieldValue={setFieldValue}
                  options={[
                    { value: "Company", label: "Company" },
                    { value: "User", label: "User" },
                  ]}
                />

                {values.type == 'Company' ? (
                <>
                  <MUITextField
               noTitle
               placeholder='Company Name'
              sm={6}
              xs={6}
              id="tanantName"
              name="tanantName"
              value={values.tanantName}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.tanantName}
              touched={touched.tanantName}
            /> 
            <MUITextField
               noTitle
              sm={6}
              xs={6}
              name="fullName"
              value={values.fullName}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="fullName"
              placeholder='Full Name'
              errors={errors.fullName}
              touched={touched.fullName}
            /> 
            <MUITextField
              noTitle
              sm={6}
              xs={6}
              id="email"
              name="email"
              placeholder='Email'
              value={values.email}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            /> 
             <BasicPhoneInput
                 noTitle
                     sm={6}
                     xs={6}
                     laceholder='Phone Number'
                      id="phone"
                    value={values.phone}
                    setFieldValue={setFieldValue}
                    touched={touched.phone}
                    errors={errors.phone}
                    selectedCountry="pk"
                    
                  />
               <MUITextField
               noTitle
               sm={12}
               xs={12}
              id="domain"
              name="domain"
              placeholder='Domain Name'
              value={values.domain}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.domain}
              touched={touched.domain}
            />
            
            <MUITextField
              noTitle
              sm={6}
              xs={12}
              id="allies"
              name="allies"
              placeholder='Allies'
              value={values.allies}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.allies}
              touched={touched.allies}
            /> 
               <MUITextField
              noTitle
              sm={6}
              xs={6}
              id="designation"
              name="designation"
              placeholder='Designation'
              value={values.designation}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.designation}
              touched={touched.designation}
              
            /> 
             <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                    sm={6}
                    xs={6}
                  >

                  <TextField
                      id="password"
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={showPassword ? "text" : "password"}
                      helperText={touched?.password ? errors?.password : ""}
                      error={touched?.password && Boolean(errors?.password)}
                      placeholder="Enter your password"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleMouseDownPassword}
                              onMouseDown={handleClickShowPassword}
                            >
                              {showPassword ? (
                                <Visibility className={classes.iconColor} />
                              ) : (
                                <VisibilityOff className={classes.iconColor} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                   <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                    sm={6}
                    xs={6}
                  >
                  <TextField
                      id="confirmPassword"
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={showConfirmPassword ? "text" : "password"}
                      helperText={touched?.confirmPassword ? errors?.confirmPassword : ""}
                      error={touched?.confirmPassword && Boolean(errors?.confirmPassword)}
                      placeholder="Enter your password"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowConfirmPassword}
                              onMouseDown={handleMouseDownConfirmPassword}
                            >
                              {showConfirmPassword ? (
                                <Visibility className={classes.iconColor} />
                              ) : (
                                <VisibilityOff className={classes.iconColor} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid> 
                </>): (
                <>
            <MUITextField
               noTitle
              sm={12}
              xs={12}
              name="fullName"
              value={values.fullName}
              handleChange={handleChange}
              onBlur={handleBlur}
              id="fullName"
              placeholder='Full Name'
              errors={errors.fullName}
              touched={touched.fullName}
            /> 
            <MUITextField
              noTitle
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
            <BasicPhoneInput
                 noTitle
                     sm={6}
                     xs={6}
                     laceholder='Phone Number'
                      id="phone"
                    value={values.phone}
                    setFieldValue={setFieldValue}
                    touched={touched.phone}
                    errors={errors.phone}
                    selectedCountry="pk"
                    
                  /> 
            <MUITextField
              noTitle
              sm={6}
              xs={6}
              id="allies"
              name="allies"
              placeholder='Allies'
              value={values.allies}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.allies}
              touched={touched.allies}
            /> 
            <MUITextField
              noTitle
              sm={6}
              xs={6}
              id="designation"
              name="designation"
              placeholder='Designation'
              value={values.designation}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.designation}
              touched={touched.designation}
            /> 
            <MUITextField
              sm={6}
              xs={6}
              type="password"
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
              sm={6}
              xs={6}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Confirm Password'
              value={values.confirmPassword}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
            /> 
                </>)}
            
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

export default Technologies;

