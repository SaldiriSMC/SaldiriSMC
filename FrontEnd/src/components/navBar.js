import React, { useEffect, useState } from 'react';
import { makeStyles } from "tss-react/mui";
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { format } from "date-fns";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { loginSchema } from "../Yup Schema";
import MUITextField from "../sharedComponents/textField";
import LogoutIcon from '@mui/icons-material/Logout';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import LinearProgress from '@mui/material/LinearProgress';
import {HashLink, NavHashLink } from 'react-router-hash-link';
import {  useLocation ,useNavigate} from "react-router-dom"
import './comaon.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import TokenExpireModel from "../sharedComponents/tokenExpireModel";
import { logIn, logout } from "../actions/Auth";
import { pushNotification } from "../utils/notifications";
import {
  userTokenExpire
} from "../service/users";
const useStyles = makeStyles()((theme) => {
  return {
    btn: {
      borderRadius: 3,
      background:'#3B5999',
      fontSize:'0.6rem',
      color:'#fff',
      marginBottom:10,
      border:'0.1rem solid #1C4FC3',
      width:30,
      padding:1,
      fontWeight: 600,
    },
    textAreaContainerWrap: {
      // border:'1px solid',
      padding:'5px !important'
        
    },
    heading2: {
    //  marginRight:'auto',
    //  marginLeft:'auto',
    //  marginTop:'-1rem',
    },
    textAreaContainer: {
      // paddingTop:'4px !important',
      '& > label': {
        lineHeight:'2.4rem',
        fontWeight:'unset',
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
    },
    blueDotUrl: {
      height: "0.4rem",
      width: "100%",
      marginBottom: "10px",
      color: "blue"
    },
    blueDotUrlist: {
      height: "0.4rem",
      color: "blue"
    }
  };
});
function NavScrollExample({ setLoader,}) {
  const location = useLocation();
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const isLoading = useSelector((state) => state.loderReducer?.isLoading);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const user = JSON.parse(localStorage.getItem("accessToken"))
  const currentTime = new Date()
  currentTime.setMinutes(currentTime.getMinutes() - 10);
  const url = window.location.pathname
  const currentTimeFormet = format((new Date(currentTime)), "yyyy-MM-dd'T'HH:mm:ss'Z'")
  const tokenExpirey = user ? format((new Date(user?.data?.tokens?.access?.expires)), "yyyy-MM-dd'T'HH:mm:ss'Z'"): ''
  const userRole =  user?.data?.user?.role
    const logOutToken = user?.data?.tokens?.access?.refreshToken
    console.log(url,"url------------->>>>>>>>>>>",url == '/')
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  

const logOut =()=>{
  dispatch(
    logout({
      data:{
        refreshToken:logOutToken,
      },
      navigate:navigate,
    }))
} 


const continueWorkHandel = () =>{


  const pauload={}
  setLoader(true);
  userTokenExpire(pauload)
  .then((response) => {
    if (response.data) {
      setShowDeleteModal(false)

    }
    pushNotification(
      `${response?.data?.message}`,
      "success",
    );
  })
  .catch((err) => {
    const { response } = err;
    setLoader(false)
    pushNotification(
      `${response?.data?.message}`,
      "error",
    );
  })
  .finally(() => {
    setLoader(false);
});
}

  return (
    <>
       {isLoading &&    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
   
    <Navbar bg="white" expand="lg">
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
            <Nav.Link as={Link}  to="/">Home {url == '/' && (<CircleIcon  className={classes.blueDotUrl}/>)}</Nav.Link>
            <Nav.Link as={Link} to="/services">  Services {url == '/services' && (<CircleIcon  className={classes.blueDotUrl}/>)}</Nav.Link>
            <NavDropdown title="Company" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item href="#portfolio"> Portfolio</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/technologies" >
              Technologies {url == '/technologies' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
              {/* <NavDropdown.Item  as={Link} to="/#clients">
              Clients
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/careers">
              Careers {url == '/careers' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/contactUs">
              Contact Us {url == '/contactUs' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
            </NavDropdown>
           
            {user &&  <NavDropdown title="Operations" id="navbarScrollingDropdown">
           {
            userRole == 'admin' ?(<>
               <NavDropdown.Item as={Link} to="/dashboard" >
              Dashboard {url == '/dashboard' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/emailTemplates" >
              Email Templates {url == '/emailTemplates' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
              <NavDropdown title=" Attendance" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/attendance" >
              Attendance List {url == '/attendance' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/inviteUser" >
              Invite User {url == '/inviteUser' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
            </NavDropdown>
            </>) : userRole == 'hr' ? <>    <NavDropdown.Item as={Link} to="/dashboard" >
              Dashboard  {url == '/dashboard' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
              <NavDropdown title=" Attendance" id="navbarScrollingDropdown">
              {/* <NavDropdown.Item as={Link} to="/attendance" >
              Attendance List
              </NavDropdown.Item> */}
              <NavDropdown.Item as={Link} to="/inviteUser" >
              Invite User {url == '/inviteUser' && (<CircleIcon  className={classes.blueDotUrlist}/>)}
              </NavDropdown.Item>
            </NavDropdown> </> : <> </>  
           }
           
            </NavDropdown>}
          </Nav>
          {user ? <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45, }}  src="/assets/2.jpg"  ></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user?.data?.user?.name.toUpperCase()}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem     
          onClick={()=>{logOut()}}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon >
          Logout
        </MenuItem>
      </Menu>
          </> : <>
          <form onSubmit={handleSubmit}>
          <Grid container flexDirection='row' display='flex' justifyContent='flex-end'sx={{p:1}}>
    
     <Grid container  display='flex' justifyContent='flex-end' spacing={2} item lg={12} md={12} sm={12}>
   
   <Grid container  display='flex' justifyContent='flex-end' spacing={2} item lg={11} md={12} sm={12}>
   <Grid
                 className={`${classes.textAreaContainerWrap}`}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item
                    sm={3.5}
                    xs={12}
                  >
                  <TextField
                      className={`${classes.textAreaContainer}`}
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      touched={touched.email}
                      label="Email"
                      type="text"
                      helperText={touched?.email ? errors?.email : ""}
                      error={touched?.email && Boolean(errors?.email)}
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
                    sm={3.5}
                    xs={12}
                  >
                  <TextField
                   className={`${classes.textAreaContainer}`}
                      id="password"
                      value={values?.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      type="password"
                      helperText={touched?.password ? errors?.password : ""}
                      error={touched?.password && Boolean(errors?.password)}
                      placeholder="Password"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
             <Grid  sm={1}
              className={`${classes.textAreaContainerWrap}`}
              xs={12} item sx={{display:'flex',alignItems:'flex-end'}}> 
            <button
                className={classes.btn}
               variant="outlined"
               color="primary"
               type='submit'
             >
              Go
             </button>

            </Grid >
   </Grid>

   <Typography className={classes.heading2} sx={{mb:-1,fontSize:'0.7rem'}} variant="body">
          Don’t have an account yet? Click here to <span > <Link to="/signUp">Sign Up</Link></span> / <span > <Link to="/forget"> Forgot Password</Link></span>

          </Typography>
          <Grid  className={`${classes.textAreaContainerWrap}`} item sm={1}></Grid>
     </Grid>

                     
         </Grid>
         </form>
          </>}
       
        </Navbar.Collapse>
      </Container>
      <TokenExpireModel
     showDeleteModal={showDeleteModal}
     setShowDeleteModal={setShowDeleteModal}
     handleDeleteModel={continueWorkHandel}
    

   />
    </Navbar>
    </>
   
  );
}

export default NavScrollExample;