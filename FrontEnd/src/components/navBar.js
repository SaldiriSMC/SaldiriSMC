import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { makeStyles } from "tss-react/mui";
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem';
import {HashLink, NavHashLink } from 'react-router-hash-link';
import {  useLocation } from "react-router-dom"
import './comaon.css';

const useStyles = makeStyles()((theme) => {
  return {
    btn: {
      // marginTop: 40,
      // marginLeft:10,
      borderRadius: 5,
      height:50,
      fontWeight: 600,
    },

  };
});
const pages = [
  {title:'Home',path:'#carouselExampleControls'},
  {title:'About Us',path:'#about'},
  {title:'Portfolio',path:'#portfolio'},
  {title:'Clients',path:'#clients'},
  {title:'Services',path:'#services'},
  {title:'Technologies',path:'#technologies'},
  {title:'Contact Us',path:'#contact'},
  {title:'Careers',path:'#career'},
];
// const pages = ['Home', 'About Us', 'Portfolio','Clients', 'Services', 'Technologies','Contact Us','Careers'];

function ResponsiveAppBar() {
  const location = useLocation();
  const { classes } = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color='white' position="fixed">
      <Container  maxWidth="xl">
        <div >
        <Toolbar disableGutters>
           <HashLink to="#home">  <img
                src="/assets/logo.png"
                alt="logo"
                className='nav-logo img-fluid'
                                      
            /></HashLink>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' ,justifyContent:'flex-start'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <NavHashLink
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= {`${page.path}`}
              className={`${location.hash}` === page.path ? "activeUrl" : ""}
              // etc...
            >
              {page.title}
          </NavHashLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex',justifyContent:'start' } }}>
  
             <NavHashLink
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
            >
             Home
          </NavHashLink>
             <NavHashLink
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
            >
             Services
          </NavHashLink>
             <NavHashLink
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
              // className={`${location.hash}` === page.path ? "activeUrl" : ""}
              // etc...
            >
             Technologies
          </NavHashLink>
             <NavHashLink
              onClick={handleClick}
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
            >
            Company
          </NavHashLink>
   
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}> <NavHashLink
              onClick={handleClick}
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
            >
            Portfolio
          </NavHashLink></MenuItem>
        <MenuItem onClick={handleClose}> <NavHashLink
              onClick={handleClick}
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
            >
            Clients
          </NavHashLink></MenuItem>
        <MenuItem onClick={handleClose}> <NavHashLink
              onClick={handleClick}
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
            >
            Contact Us
          </NavHashLink></MenuItem>
        <MenuItem onClick={handleClose}> <NavHashLink
              onClick={handleClick}
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= '/s'
            >
            Careers
          </NavHashLink></MenuItem>
      </Menu>
          
          
            
          </Box>
      
          <Grid container flexDirection='row' display='flex' justifyContent='flex-end' spacing={2} sx={{p:1}}>
     
       <Grid container spacing={2} item sm={8}>
       <MUITextField
                sm={6}
                xs={6}
                id="surgicalProcedure"
                name="surgicalProcedure"
                label="Email"
                value='d'
              /> 
              <MUITextField
                sm={6}
                xs={6}
                id="surgicalProcedure"
                name="surgicalProcedure"
                label="Password"
                value='d'
              /> 
       </Grid>
   
              <Grid  sm={4}
                xs={6} item sx={{display:'flex',alignItems:'center'}}> 
              <Button
                  className={classes.btn}
                 variant="outlined"
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
                Go
               </Button>

              </Grid>
              <Typography variant="body" className={classes.title} >
              Don’t have an account yet? Click here to Sign Up
            </Typography>           
        </Grid>
        </Toolbar>
        
        </div>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;