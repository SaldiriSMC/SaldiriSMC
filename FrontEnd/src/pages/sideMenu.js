import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles } from "tss-react/mui";
import List from '@mui/material/List';
import ChecklistIcon from '@mui/icons-material/Checklist';
import TableViewIcon from '@mui/icons-material/TableView';
import { Link, Outlet } from 'react-router-dom';
import BadgeIcon from '@mui/icons-material/Badge';
import CircleIcon from '@mui/icons-material/Circle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
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
      marginTop: "12px",
      color: "blue"
    }
  };
});
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const { classes } = useStyles();
  const [open, setOpen] = React.useState(true);
  const url = window.location.pathname
  const [openList, setOpenList] = React.useState(true);
  const user = JSON.parse(localStorage.getItem("accessToken"))
  const userRole =  user?.data?.user?.role
  const handleClick = () => {
    setOpenList(!openList);
  };

  const sideListTenet =[
    {name:'Table',id:1,path:'/dynamicTable',icon:<TableViewIcon/>},
    {name:'Designation',id:1,path:'/tenant',icon:<BadgeIcon/>},
  {name:'Department',id:1,path:'/tetentDepartment',icon:<WorkIcon/>},
  {name:'Status',id:1,path:'/tenantStatus',icon:<AccountCircleIcon/>},
  {name:'Queues',id:1,path:'/queues',icon:<ChecklistIcon/>},
  {name:'CARLIST',id:1,path:'/carList',icon:<MailIcon/>},
]
  const sideList = (userRole === 'employee') ? [{name:'Dashboard',id:1,path:'/dashboard',icon:<DashboardIcon/>},
  {name:'Attendance',id:1,path:'/attendance',icon:<ListAltIcon/>},
  
]: [{name:'Dashboard',id:1,path:'/dashboard',icon:<DashboardIcon/>},
{name:'Attendance',id:1,path:'/attendance',icon:<ListAltIcon/>},
{name:'Inivte User',id:1,path:'/inviteUser',icon:<PersonAddIcon/>},
{name:'Template',id:1,path:'/emailTemplate',icon:<MailIcon/>},

]


  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
    
      </AppBar> */}
      <Drawer
        sx={{
          position:'relative !important',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
          '& ..css-bzv0vy-MuiPaper-root-MuiDrawer-paper': {
          
          },

        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
        {/* <Divider /> */}
        <List>
          {(userRole === 'admin') && (
<>
<ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Tenant" />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {sideListTenet.map((text, index) => (
            <ListItem key={text} disablePadding   component={Link} to={text.path}  >
              <ListItemButton>
                <ListItemIcon>
                {text.icon}
                </ListItemIcon>
                <div style={{display:'flex'}}>
                <ListItemText  primary={text.name} /> {url == `${text.path}` && (<CircleIcon  className={classes.blueDotUrlist}/>)}
                </div>              
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
</>
          )}
       
          {  sideList.map((text, index) => (
            <ListItem key={text} disablePadding   component={Link} to={text.path}  >
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <div style={{display:'flex'}}>
                <ListItemText  primary={text.name} /> {url == `${text.path}` && (<CircleIcon  className={classes.blueDotUrlist}/>)}
                </div>
       
                
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
    </Box>
    </>
  );
}
