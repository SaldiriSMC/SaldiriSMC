import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import DescriptionIcon from '@mui/icons-material/Description';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const ViewDeleteDownloadAction = ({ value: { change, isView  } }) => {
  const handleClick = (val) => {
    change(val)
  }

  return (
    <>
    {isView && (<Stack direction="row" alignItems="center" spacing={1}>
       <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="View"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('view')}>
                <DescriptionIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
        
        {/* <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Edit"
            placement="bottom-start"
            enterDelay={100}
            style={{
                display: 'none'
            }}
        >
            <IconButton aria-label="delete" size="small" onClick={()=>handleClick('edit')}>
                <EditIcon fontSize="inherit" />
            </IconButton>
        </Tooltip> */}
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Download"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small">
                <IconButton aria-label="delete" size="small" onClick={()=>handleClick('download')}>
                    <SaveAltIcon fontSize="small" />
                </IconButton>
            </IconButton>
        </Tooltip>
        <Tooltip
            classes={{
                tooltip: 'capitalize',
            }}
            title="Print"
            placement="bottom-start"
            enterDelay={100}
        >
            <IconButton aria-label="delete" size="small">
                <IconButton aria-label="delete" size="small" onClick={()=>handleClick('print')}>
                    <PrintIcon fontSize="small" />
                </IconButton>
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
    </Stack> )}
    
    </>
  );
};

export default ViewDeleteDownloadAction;
