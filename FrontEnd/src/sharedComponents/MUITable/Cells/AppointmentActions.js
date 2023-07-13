import * as React from 'react';
import { makeStyles } from 'tss-react/mui'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { appointmentActionDropdown } from '../../../configs/appConstants'

const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
          display: 'flex'
        },
        btn: {
          display: 'block',
          borderRadius: 20,
          padding: 0,
          width: 100,
          marginTop: 10,
        }
    };
  });

const AppointmentActions = ({ value: { patientId, change } }) => {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event?.stopPropagation();
    setAnchorEl(null);
  };
  const changeHalder = (event) => {
    event.stopPropagation();
    change(event.target.value, patientId);
    handleClose()
  }
  
  return (
    <>
        <div className={classes.mainContainer}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <IconButton
                color="primary"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <MoreVertIcon/>
              </IconButton>
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
              {
                appointmentActionDropdown.map(item => <MenuItem onClick={changeHalder} value={item.id} key={item.id}>{item.label}</MenuItem>)
              }
            </Menu>
        </div>
    </>   
  );
}

export default AppointmentActions;