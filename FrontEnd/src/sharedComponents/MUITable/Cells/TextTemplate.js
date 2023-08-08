import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const TextTemplate = ({ value }) => {
  return (
    <>
    { value?.hideTooltip ? 
      <Typography variant="body2" color="textSecondary">
        {value?.body} 
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
      {value?.body} 
      </Typography>
    </Tooltip>}
    </>
  );
};

export default TextTemplate;
