import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Text = ({ value, hideTooltip}) => {
  console.log("hidetoolti------->>>>>>>",hideTooltip)
  return (
    <>
    { hideTooltip ? 
      <Typography variant="body2" color="textSecondary">
        {value} 
      </Typography>
     : <Tooltip
      classes={{
        tooltip: 'capitalize',
      }}
      title={value || ''}
      placement="bottom-start"
      enterDelay={100}
    >
      <Typography variant="body2" color="textSecondary">
        {value} 
      </Typography>
    </Tooltip>}
    </>
  );
};

export default Text;
