import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const ViewDeleteAction = ({ value: { change,hideDelte, hideView } }) => {
  const handleClick = (val) => {
    change(val)
  }
  return (
    <>
    <Stack direction="row" alignItems="center" spacing={1}>
        

        {hideView && (<Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="View"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('view')}>
                <RemoveRedEyeIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>)}
        {hideDelte && ( <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Delete"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small">
                <IconButton aria-label="delete" size="small" onClick={()=>handleClick('delete')}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </IconButton>
        </Tooltip>)}
       
    </Stack>
    </>
  );
};

export default ViewDeleteAction;
