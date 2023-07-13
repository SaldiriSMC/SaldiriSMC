import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { noteActionDropdown } from '../../../configs/appConstants'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const NoteActionDropDown = ({ value: { change, taskType, taskStatus, viewTask } }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeHalder = (event) => {
    event.stopPropagation();
    change(event.target.value);
    handleClose()
  }
  
  return (
    <>
      {
        !taskType || taskType === 'MARK_IN_ACTIVE' ? 
        <Typography variant="body2" color="primary" style={{ fontWeight: 700, position: 'relative', top: 4, cursor: 'pointer' }} onClick={viewTask}>
          View
        </Typography> :
        taskType === "APPROVED" ? (
          <Typography variant="body2" style={{ fontWeight: 700 }}>
            TASK COMPLETED
            <CheckCircleIcon style={{ color: '#39D98A', position: 'relative', top: 4, marginLeft: 10}} />
          </Typography>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Typography variant="body2" color="primary" style={{ fontWeight: 700, position: 'relative', top: 4, cursor: 'pointer' }} onClick={changeHalder}>
                {noteActionDropdown[taskType]?.menu}
              </Typography>
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
                  noteActionDropdown[taskType]?.actions.map(item => <MenuItem onClick={changeHalder} value={item.id} key={item.id}>{item.label}</MenuItem>)
              }
            </Menu>
          </React.Fragment>
        )
      }
    </>   
  );
}

export default NoteActionDropDown;