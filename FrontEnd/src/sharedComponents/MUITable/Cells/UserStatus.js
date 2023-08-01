import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const UserStatus = ({ value}) => {
  return (
    <>
   <Tooltip
      classes={{
        tooltip: 'capitalize',
      }}
      title={value?.name || ''}
      placement="bottom-start"
      enterDelay={100}
    >
      <Typography sx={{display:'flex', alignItems:'center'}} variant="body2" color="textSecondary">
        {value?.isOnline && (
          <div 
                    style={{  border: "1px solid",
                    width: "10px",
                    marginRight:4,
                    height: "10px",
                    backgroundColor: "forestgreen",
                    borderRadius: "50%",
                    color: "white",
                    fontSize: "small",
                    cursor:'pointer',
                    padding: "1px 0px 1px 5px"}} >
                        
                        </div> 
        )}
       {value?.name} 
      </Typography>
    </Tooltip>
    </>
  );
};

export default UserStatus;
