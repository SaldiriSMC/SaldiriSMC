import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import ScienceIcon from '@mui/icons-material/Science';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import AutorenewIcon from '@mui/icons-material/Autorenew';
const EditDeleteViewUploadAction = ({ value: { change } }) => {
  const handleClick = (val) => {
    change(val)
  }
  return (
    <>
    <Stack direction="row" alignItems="center" spacing={1}>
       {/* <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="View Order"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('View')}>
                <DescriptionIcon fontSize="inherit" />
            </IconButton>
        </Tooltip> */}
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Upload Results"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('Upload')}>
                <FileUploadIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="View Results"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('View')}>
                <DescriptionIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
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
    </Stack>
    </>
  );
};

export default EditDeleteViewUploadAction;
