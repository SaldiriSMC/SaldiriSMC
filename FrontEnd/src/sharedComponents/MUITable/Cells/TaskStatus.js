import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelRounded from '@mui/icons-material/CancelRounded';
import InfoRounded from '@mui/icons-material/InfoRounded';

const TaskStatus = ({ value: { status } }) => {
  
  return (
    <>
      {
        status === 'INCOMPLETE' && (
          <Typography variant="body2" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
            TO DO
            <InfoRounded style={{ color: 'orange', position: 'relative', top: 4, marginLeft: 10}} />
          </Typography>
        )
      }
      {
        status === 'DECLINE' && (
          <Typography variant="body2" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
            DECLINED
            <CancelRounded style={{ color: 'red', position: 'relative', top: 4, marginLeft: 10}} />
          </Typography>
        )
      }
      {
        status === 'COMPLETE' && (
          <Typography variant="body2" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
            COMPLETED
            <CheckCircleIcon style={{ color: '#39D98A', position: 'relative', top: 4, marginLeft: 10}} />
          </Typography>
        )
      }
    </> 
  );
}

export default TaskStatus;