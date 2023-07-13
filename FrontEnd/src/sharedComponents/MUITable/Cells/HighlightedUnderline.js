import React from 'react';
import Tooltip from '@mui/material/Tooltip';


const HighlightedUnderline = ({ value: { path, linkName, id } }) => {

  return (
    <Tooltip
      classes={{
        tooltip: "capitalize",
      }}
      title={linkName || ""}
      placement="bottom-start"
      enterDelay={100}
    >
   </Tooltip>
  );
};

export default HighlightedUnderline;
