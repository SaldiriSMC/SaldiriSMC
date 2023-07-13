import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { format, parseISO } from 'date-fns'
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'

const getTimeStamp = (val, variant) => {
    let result = '-';
    const dateTime = utcToZonedTime(val, 'utc');
    if (variant === 'date') {
      result = format(new Date(dateTime), "dd/MM/yyyy")
    } else if (variant === 'dateTime') {
      result = format(new Date(val), "dd/MM/yyyy - h:mm a")
    }
    return result
}

const TimeStamp = ({ value, variant }) => {
  return (
    <Tooltip
      classes={{ tooltip: 'time-tool-tip' }}
      title={!value ? '-' : getTimeStamp(value, variant)}
      enterDelay={100}
      placement="bottom-start"
    >
      <Typography variant="body2" color="textSecondary">
        {!value ? '-' : getTimeStamp(value, variant)}
      </Typography>
    </Tooltip>
  );
};

export default TimeStamp;
