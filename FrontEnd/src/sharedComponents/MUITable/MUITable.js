import * as React from 'react';
import { makeStyles } from 'tss-react/mui'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import CellRenderer from './CellRenderer';
import { format } from "date-fns";
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles()((theme) => {
    return {
      tableHeadWrapper: {
        background: "rgb(2 117 255 / 77%)",
        '& th': {
          fontSize: '14px',
          padding: '8px 16px 6px 16px',
          color: '#fff'
        },
      },
      tableBodyWrapper: {
        '& td': {
          padding: '6px 16px 6px 16px',
        }
      },
      cellWrapper: {
        '& p': {
          fontSize: '14px'
        } 
      },
      paginationWrapper: {
        position: "absolute",
        right: 0,
        '& p': {
          fontSize: '14px'
        },
        '& .MuiInputBase-root': {
          width: 60,
          height: 30,
          '& > div': {
            fontSize: 15,
            backgroundColor: 'transparent'
          }
        },
        '& .MuiSelect-select': {
          fontSize: 20
        },
        '& .Mui-disabled': {
          color: `${theme.palette.color.gray1} !important`
        }
      },
      footWrapper: {
        position: 'relative',
        height: 50
      },
      selectDropdown: {
        display: 'none'
      },
      hideRow: {
        display: 'none'
      }
    };
});

const MUITable = (props) => {
  const { column, list, isLoading, pagination, onSelect, variant, onCheckAll, checkedValue } = props
  const { classes } = useStyles();
  const listToRender = isLoading ? [{}, {}, {}, {}, {}] : list;
  return (
    <div style={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{overflow: 'hidden'}}>
          <TableHead className={classes.tableHeadWrapper}>
            <TableRow>
              {/* {
                onCheckAll && 
                <TableCell>
                  <Checkbox 
                    style={{
                      color: '#fff',
                      marginLeft: 16
                    }}
                    onChange={(e) => onCheckAll(e.target.checked)}
                  />
                </TableCell>
              } */}
              {
                column.map(item => <TableCell key={item.id}  className={item.display === 'none' && classes.hideRow}>
                  {item.id === 'check' ? (
                    <Checkbox 
                    style={{
                      color: '#fff',
                    }}
                    checked={checkedValue}
                    onChange={(e) => onCheckAll(e.target.checked)}
                  />
                  ) : (
                    item.label
                  )}
                </TableCell>)
              }
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBodyWrapper}>
            {listToRender.map((row, index) => {
              return (
                <TableRow
                  key={row.id || index}
                  hover
               
                >
                  {column.map((cell,index) => (
                    <TableCell 
                    className={`${classes.cellWrapper} ${cell.display === 'none' && classes.hideRow}`} key={cell.id}>
                      <CellRenderer
                        isLoading={isLoading}
                        value={row[cell.name]}
                        renderer={cell.renderer}
                        props={cell.props}
                        
                        highlighted={row.suspicious}
                        striked={row.striked}
                        colour={cell.coloured}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
            {listToRender.length < 1 && (  <TableCell className='py-3 mx-auto'> Data not available</TableCell>
            ) }
          
          </TableBody>
          {pagination && (
            <TableFooter className={classes.footWrapper}>
              <TableRow>
                <TablePagination
                  className={classes.paginationWrapper}
                  labelRowsPerPage="Rows per page"
                  rowsPerPageOptions={pagination.rowsPerPageOptions ?? [5, 10, 15, 20] }
                  dir="ltr"
                  count={pagination.totalRecords || 0}
                  rowsPerPage={pagination.pageSize}
                  page={pagination.pageNumber || 0}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page',
                  }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page',
                  }}
                  onPageChange={pagination.onChangePageNumber}
                  onRowsPerPageChange={pagination.onChangePageSize}
                />
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </TableContainer>
    </div>
  )
}

export default MUITable
