import * as React from 'react';
import { makeStyles } from "tss-react/mui";
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import { loginSchema } from "../Yup Schema";
import MUITextField from "../sharedComponents/textField";
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Button from '@mui/material/Button';
import {HashLink, NavHashLink } from 'react-router-hash-link';
import {  useLocation } from "react-router-dom"
import './comaon.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import { logIn, logout } from "../actions/Auth";
const useStyles = makeStyles()((theme) => {
  return {
    btn: {
      marginTop: 6,
      // marginLeft:10,
      borderRadius: 5,
      borderColor:'#1C4FC3',
      background:'white',
      height:35,
      width:40,
      fontWeight: 600,
    },
    textAreaContainerWrap: {
      // border:'1px solid',
      padding:'5px !important'
        
    },
    textAreaContainer: {
      // paddingTop:'4px !important',
      '& > label': {
        lineHeight:'2.4rem',
        fontSize:'0.9rem'
      },
      '& > div': {
        height: '100%',
        '& input': {
         height:1,
        },
        '& .MuiInputLabel-root': {
         lineHeight:'2rem',
        }
      }
    },
    selectBox: {
      '& > div': {
        textAlign: 'left'
      }
    },
    removeBorder: {
      '& > div': {
        border: 'none',
        textAlign: 'left',
        height: 20,
        '& input': {
          padding: '0px 5px',
        }
      }
    },
    SignUp:{
      textDecoration:'underline',
      cursor:'pointer',
    }
  };
});
function NavScrollExample() {
  const location = useLocation();
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("accessToken"))

    const logOutToken = user?.data?.tokens?.refresh?.token
    console.log("refreshToken",logOutToken)
  const initialValues = {
    email: "",
    password: "",
  };
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
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
      onSubmit: async (data) => {
        dispatch(
          logIn({
            credentials:{
              email: data.email,
            password: data.password
          },
          })
        );
      }
    });


  return (
    <Navbar className='navBarwrap' bg="white" expand="lg">
      <Container fluid>
       <HashLink to="/">  <img
                src="/assets/logo.png"
                alt="logo"
                className='nav-logo img-fluid'
                                      
            /></HashLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">  Services</Nav.Link>
            <NavDropdown title="Company" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#portfolio"> Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="/technologies">
              Technologies
              </NavDropdown.Item>
              <NavDropdown.Item href="#clients">
              Clients
              </NavDropdown.Item>
              <NavDropdown.Item href="/careers">
              Careers
              </NavDropdown.Item>
              <NavDropdown.Item href="/contactUs">
              Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {user ? <>
            <Grid container flexDirection='row' display='flex' justifyContent='flex-end'sx={{p:1}}>
          <Button variant="contained" endIcon={<LogoutIcon />} onClick={()=>{
         dispatch(
          logout({
            refreshToken:logOutToken
          })
        )}}>
            Log Out
           </Button></Grid>
          </> : <>
          <form onSubmit={handleSubmit}>
          <Grid container flexDirection='row' display='flex' justifyContent='flex-end'sx={{p:1}}>
    
     <Grid container  display='flex' justifyContent='flex-end' spacing={2} item lg={10} md={12} sm={12}>
     <Grid
 className={`${classes.textAreaContainerWrap}`}
container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                    sm={3}
                    xs={12}
                  >
                  <TextField
                      className={`${classes.textAreaContainer}`}
                      id="confirmPassword"
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Email"
                      type="text"
                      error={touched?.confirmPassword && Boolean(errors?.confirmPassword)}
                      placeholder="E-mail"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
             <Grid
              className={`${classes.textAreaContainerWrap}`}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                    sm={3}
                    xs={12}
                  >
                  <TextField
                   className={`${classes.textAreaContainer}`}
                      id="confirmPassword"
                      value={values?.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      type="text"
                      error={touched?.confirmPassword && Boolean(errors?.confirmPassword)}
                      placeholder="Password"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
         {/* <MUITextField
             noTitle
              sm={5}
              xs={12}
              label="Email"
              placeholder="Email"
              name="email"
              id="email"
              value={values.email}
              handleChange={handleChange}
              errors={errors.email}
              touched={touched.email}
            />  */}
            {/* <MUITextField
            noTitle
              sm={5}
              xs={12}
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={values.password}
              handleChange={handleChange}
              errors={errors.password}
              touched={touched.password}
            />  */}
             <Grid  sm={1}
              className={`${classes.textAreaContainerWrap}`}
              xs={12} item sx={{display:'flex',alignItems:'center'}}> 
            <button
            // sx={{mt:1}}
                className={classes.btn}
               variant="outlined"
               color="primary"
               type='submit'
              //  style={{ width: '2px' }}
             >
              Go
             </button>

            </Grid>
            {/* <Grid  className={`${classes.textAreaContainerWrap}`} item sx={{p:0}} display='flex' justifyContent='center'  sm={10}> */}
          <Typography sx={{mb:-1}} variant="body">
          Don’t have an account yet? Click here to <span > <Link to="/signUp">Sign Up</Link></span> / <span > <Link to="/forget"> Forgot Password</Link></span>

          </Typography> 
            {/* </Grid> */}
     </Grid>

                     
         </Grid>
         </form>
          </>}
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;