import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import ScienceIcon from '@mui/icons-material/Science';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { sponsorshipsActionDropdown,sponsorshipsAction } from '../../../configs/appConstants'
const EditViewDotAction = ({ value: { change,statusType ,viewAction} }) => {
  const handleClick = (val) => {
    change(val)
  }

  const handleClickSDot = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
    <Stack direction="row" alignItems="center" spacing={1}>
      {viewAction && (
        <Tooltip
        classes={{
            tooltip: 'capitalize',
        }}
        title="View"
        placement="bottom-start"
        enterDelay={100}
        >
        <IconButton aria-label="delete" size="small" onClick={()=>handleClick('View')}>
            <DescriptionIcon fontSize="inherit" />
        </IconButton>
        </Tooltip>
              )}
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Edit"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('edit')}>
                <EditIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
        <IconButton
                color="primary"
                onClick={handleClickSDot}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <MoreVertIcon/>
              </IconButton>
        <Menu
                anchorEl={anchorEl}
                id="action-menu"
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
                 statusType === 'Discontinued' && (sponsorshipsActionDropdown.map(item => <MenuItem onClick={changeHalder} value={item.id} key={item.id}>{item.label}</MenuItem>))
                }
                {
                 statusType === 'Active' && (sponsorshipsAction.map(item => <MenuItem onClick={changeHalder} value={item.id} key={item.id}>{item.label}</MenuItem>))
                }
              
            </Menu>
    </Stack>
    </>
  );
};

export default EditViewDotAction;
