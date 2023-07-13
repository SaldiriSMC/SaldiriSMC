import React from 'react';
import Skeleton from '@mui/material/Skeleton';

import * as cellComponents from '../Cells';

const CellRenderer = ({ renderer, props, isLoading, ...rest }) => {
  const Cell = cellComponents[renderer];
  return isLoading ? (
    <span className="stat-loader">
      <Skeleton variant="text" animation="wave" />
    </span>
  ) : (
    <Cell {...rest} {...props} />
  );
};

export default CellRenderer;
