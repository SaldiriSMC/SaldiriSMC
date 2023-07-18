import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';

const CheckboxItem = ({ value: { onchange, id, checked,disabled } }) => {
  return (
    <Checkbox
        checked={checked.includes(id)}
        disabled={disabled}
        onChange={(e) => onchange(e.target.checked, id)}
    />
  );
};

export default CheckboxItem;
