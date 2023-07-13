import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const DiagnosisStatus = ({ value: { change,isPrimary ,name} }) => {
  const handleClick = (val) => {
    change(val)
  }
  return (
    <>
    <Stack direction="row" alignItems="center" spacing={1}>
        {
            isPrimary ? (       
                <>
             <Tooltip
                classes={{
                    tooltip: 'capitalize',
                }}
                title="Primary"
                placement="bottom-start"
                enterDelay={100}
                >
                <div 
                    onClick={()=>handleClick('true')}
                    style={{  border: "1px solid",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "forestgreen",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "small",
                    cursor:'pointer',
                    padding: "1px 0px 1px 5px"}} >
                        P
                        </div>
                </Tooltip>
                <Typography variant="body2" color="textSecondary">
                  {name}
                </Typography>
                </>
            ):
            (              
             <>
                <Tooltip
                classes={{
                    tooltip: 'capitalize',
                }}
                title="Secondary"
                placement="bottom-start"
                enterDelay={100}
              >
                <div 
                    onClick={()=>handleClick('false')}
                    style={{  border: "1px solid",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "gray",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "small",
                    cursor:'pointer',
                    padding: "1px 0px 1px 4px"}} >
                        S
                    </div>
                </Tooltip>
                <Typography variant="body2" color="textSecondary">
                 {name}
                </Typography>
                    </>                  
            )
        }   
    </Stack>
    </>
  );
};

export default DiagnosisStatus;
