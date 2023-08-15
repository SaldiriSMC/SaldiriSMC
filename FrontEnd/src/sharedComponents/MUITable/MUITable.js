
import { makeStyles } from 'tss-react/mui'
import Table from '@mui/material/Table';
import React, {  useRef } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import CellRenderer from './CellRenderer';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import TableSortLabel from '@mui/material/TableSortLabel';

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
  const { column, list, isLoading, pagination, onSelect, variant, onCheckAll, checkedValue,setSorting } = props
  const { classes } = useStyles();
  const [order, setOrder] = React.useState('asc');
  const orderByRef = useRef('');
  const [orderBy, setOrderBy] = React.useState('');
  const listToRender = isLoading ? [{}, {}, {}, {}, {}] : list;
  const handleRequestSort = (event, property) => {
    orderByRef.current = property;
    setOrderBy(property);
    console.log(orderBy === property && order === 'asc',"orderByRef-------",orderByRef,'property------',property,'order-------',order)
    const isAsc =  orderByRef.current === property && order === 'asc';
    console.log("isAsc---------",isAsc)
    setOrder(isAsc ? 'desc' : 'asc');
if (setSorting){
  setSorting(isAsc ? 'desc' : 'asc');
}
 
  };

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
                column.map(item => <TableCell    sortDirection={orderByRef.current === item.id ? order : false} key={item.id} className={item.display === 'none' && classes.hideRow}>
                  {item.id === 'check' ? (
                    <Checkbox 
                    style={{
                      color: '#fff',
                    }}
                    checked={checkedValue}
                    onChange={(e) => onCheckAll(e.target.checked)}
                  />
                  ) : (
                    <>
                <TableSortLabel
              active={orderByRef.current === item.id}
              direction={orderByRef.current === item.id ? order : 'asc'}
              onClick={(event) => {handleRequestSort(event, item.id);}}
            >
              {item.label}
              {orderByRef.current === item.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
                    </>
                   
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
