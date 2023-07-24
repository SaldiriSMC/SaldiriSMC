import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
const ViewAction = ({ value: { change } }) => {
  const handleClick = (val) => {
    change(val)
  }
  return (
    <>
    <Stack direction="row" alignItems="center" spacing={1}>
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="View"
            placement="bottom-start"
            enterDelay={100}
        >
         <Typography  sx={{textDecoration: 'underline'}} color="primary" variant="body2" style={{ position: 'relative', top: 4, cursor: 'pointer' }} onClick={()=>handleClick('view')}>
            View
          </Typography>
        </Tooltip>
    </Stack>
    </>
  );
};

export default ViewAction;
