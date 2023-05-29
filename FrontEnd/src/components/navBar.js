import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import MenuItem from '@mui/material/MenuItem';
import {HashLink, NavHashLink } from 'react-router-hash-link';
import {  useLocation } from "react-router-dom"
import './comaon.css';
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar color='white' position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           <HashLink to="#home">  <img
                src="/assets/logo.png"
                alt="logo"
                style={{width:300}}                              
            /></HashLink>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' ,justifyContent:'flex-end'} }}>
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
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex',justifyContent:'center' } }}>
            {pages.map((page) => (
             <>
             <NavHashLink
              style={{ marginRight:10 , marginLeft:10, display: 'block', textDecoration:'none'}}
              to= {`${page.path}`}
              className={`${location.hash}` === page.path ? "activeUrl" : ""}
              // etc...
            >
              {page.title}
          </NavHashLink>
          </>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;