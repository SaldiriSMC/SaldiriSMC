import * as React from 'react';

import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const ProviderEditDelete = ({ value: { change, hideEdit } }) => {
  
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        {!hideEdit && (
            <Tooltip
                classes={{
                    tooltip: 'capitalize',
                }}
                title="Edit"
                placement="bottom-start"
                enterDelay={100}
            >
                <IconButton aria-label="delete" size="small" onClick={()=>change(2)}>
                    <EditIcon fontSize="inherit" />
                </IconButton>
            </Tooltip>
        )}
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Delete"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>change(1)} >
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </IconButton>
        </Tooltip>
    </Stack>
    </>   
  );
}

export default ProviderEditDelete;