import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteAction = ({ value: { change,hideDelte } }) => {
  const handleClick = (val) => {
    change(val)
  }
  return (
    <>
    {hideDelte ? '' : (<Stack direction="row" alignItems="center" spacing={1}>
        <Tooltip
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
        </Tooltip>
    </Stack>)}
    
    </>
  );
};

export default DeleteAction;