import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Highlighted = ({ value }) => {
  return (
    <Tooltip
      classes={{
        tooltip: 'capitalize',
      }}
      title={value || ''}
      placement="bottom-start"
      enterDelay={100}
    >
      <Typography variant="body2" color="primary" style={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Tooltip>
  );
};

export default Highlighted;
