import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { taskActionDropdown } from '../../../configs/appConstants'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRounded from '@mui/icons-material/CancelRounded';

const TaskActionDropDown = ({ value: { change, taskType, taskStatus } }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeHalder = (event, val) => {
    event.stopPropagation();
    change(val);
    handleClose()
  }
  const taskTypeA = ['RMND','IE', 'RD', 'IM', 'UU', 'DU', 'IS', 'IC', 'OTH', 'REFOUT', 'RLI', 'SN'];
  const taskTypeB = ['RL','RI'];
  const taskTypeC = ['NU'];
  const taskTypeD = ['DAU'];
  const taskTypeE = ['AU'];
  const taskTypeF = ['SD'];
  const taskTypeG = ['APPR'];
  const taskTypeH = ['ARX', 'ALI'];
  const taskTypeI = ['ILI'];
  const taskTypeJ = ['PRX'];
  const taskTypeK = ['REFIN']
  const getLabel = () => {
    let result;
    if(taskTypeA.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_A']?.menu;
    } else if (taskType === 'REFIN') {
      result = taskActionDropdown['TASK_GENERATION_USER_REFERAL']?.menu;
    } else if (taskTypeB.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_B']?.menu;
    }
    else if (taskTypeC.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_C']?.menu;
    }
    else if (taskTypeD.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_D']?.menu;
    } else if (taskTypeE.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_E']?.menu;
    } else if (taskTypeF.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_F']?.menu;
    } else if (taskTypeG.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_G']?.menu;
    }  else if (taskTypeI.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_H']?.menu;
    }   else if (taskTypeJ.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_I']?.menu;
    } else if (taskTypeH.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_SYSTEM_A']?.menu;
    }
    return result;
  }

  const getValue = () => {

    let result;
    if(taskTypeA.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_A']?.value;
    } else if (taskType === 'REFIN') {
      result = taskActionDropdown['TASK_GENERATION_USER_REFERAL']?.value;
    } else if (taskTypeB.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_B']?.value;
    } else if (taskTypeC.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_C']?.value;
    } else if (taskTypeD.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_D']?.value;
    } else if (taskTypeE.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_E']?.value;
    } else if (taskTypeF.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_F']?.value;
    } else if (taskTypeG.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_G']?.value;
    } else if (taskTypeI.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_H']?.value;
    } else if (taskTypeJ.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_I']?.value;
    } else if (taskTypeH.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_SYSTEM_A']?.value;
    }
    return result;
  }

  const getActionMenu = () => {
    let result;
    if(taskTypeA.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_A']?.actions;
    } else if (taskType === 'REFIN') {
      result = taskActionDropdown['TASK_GENERATION_USER_REFERAL']?.actions;
    } else if(taskTypeB.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_B']?.actions;
    } else if(taskTypeC.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_C']?.actions;
    } else if(taskTypeD.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_D']?.actions;
    } else if(taskTypeE.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_E']?.actions;
    } else if(taskTypeF.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_F']?.actions;
    } else if (taskTypeG.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_G']?.actions;
    } else if (taskTypeI.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_H']?.actions;
    } else if (taskTypeJ.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_USER_I']?.actions;
    } else if (taskTypeH.includes(taskType)) {
      result = taskActionDropdown['TASK_GENERATION_SYSTEM_A']?.actions;
    }
    return result;
  }

  return (
    <>
      {taskStatus === "COMPLETE" || taskStatus === "DECLINE" ? (
        <>
          <Typography variant="body2" color="primary" style={{ fontWeight: 700, position: 'relative', top: 4, cursor: 'pointer' }} onClick={(e)=>changeHalder(e, 'REVIEW')}>
            Review
          </Typography>
          {/* {taskType === 'ILI' && (
            taskStatus === "COMPLETE" ? (
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                TASK COMPLETED
                <CheckCircleIcon style={{ color: '#39D98A', position: 'relative', top: 4, marginLeft: 10}} />
              </Typography>
            ) : (
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                REJECTED
                <CancelRounded style={{ color: 'red', position: 'relative', top: 4, marginLeft: 10}} />
              </Typography>
            )
          )}
          {taskType !== 'ILI' && (
            taskStatus === "COMPLETE" ? (
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                TASK COMPLETED
                <CheckCircleIcon style={{ color: '#39D98A', position: 'relative', top: 4, marginLeft: 10}} />
              </Typography>
            ) : (
              <Typography variant="body2" style={{ fontWeight: 700 }}>
                TASK DECLINED
                <CancelRounded style={{ color: 'red', position: 'relative', top: 4, marginLeft: 10}} />
              </Typography>
            )
          )} */}
        </>
          
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Typography variant="body2" color="primary" style={{ fontWeight: 700, position: 'relative', top: 4, cursor: 'pointer', whiteSpace: 'nowrap' }} onClick={(e)=>changeHalder(e, getValue())}>
                {getLabel()}
              </Typography>
              {getActionMenu()?.length > 0 && (
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
              )}
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
                getActionMenu()?.map(item => <MenuItem onClick={(e)=>changeHalder(e, item.value)} value={item.id} key={item.id}>{item.label}</MenuItem>)
              }
            </Menu>
          </React.Fragment>
        )
      }
    </>   
  );
}

export default TaskActionDropDown;