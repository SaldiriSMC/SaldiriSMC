import React, {useEffect, useState} from 'react';
import { useFormik } from "formik";
import { makeStyles } from 'tss-react/mui';
import TextField from '@mui/material/TextField'
import { Link, useNavigate,useParams } from "react-router-dom";
import './comaon.css';
import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import RadioButtonsGroup from "../sharedComponents/radioButton";
import BasicPhoneInput from "../sharedComponents/phoneInput";
import Button from '@mui/material/Button';
import { chnagePasswordSechmea } from "../Yup Schema";
import { useDispatch } from "react-redux";
import { resetPassword } from "../actions/Auth/passwordReset";
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

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log(token);
    // Use the token for further processing or state management


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
    password: "",
  };


  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: chnagePasswordSechmea,

      onSubmit: async (values, action) => {
          dispatch(
            resetPassword({
              credentials:{
              password: values.password,},
              LogIntoken:token,    
              navigate:navigate,
            }
            )
          );

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
<Grid style={{height:'100vh'}} container flexDirection='row' display='flex' justifyContent='' spacing={2} sx={{p:1}}>
     
     <Grid display='flex' justifyContent='center' alignItems='center' item sm={12} md={6}  sx={{backgroundColor:'#3B5999'}}>
   <img src="/assets/Background.png" className='w-50 p-4 img-fluid' ></img>
     </Grid>
     <Grid item spacing={2} padding={10} justifyContent='start' alignContent='flex-start' alignItems='start' container md={6}  sm={12}>
    <Grid item sm={12} sx={{textAlign:'start'}}>
    <Typography sx={{mt:2}} variant="h1" >
    Change Password
            </Typography> 
    </Grid>
    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                    sm={7}
                    xs={12}
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
                    sm={7}
                    xs={12}
                  >
                  <TextField
                      id="confirmPassword"
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type={showConfirmPassword ? "text" : "password"}
                      helperText={touched?.confirmPassword ? errors?.confirmPassword : ""}
                      error={touched?.confirmPassword && Boolean(errors?.confirmPassword)}
                      placeholder="Enter confrim password"
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

