import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditModal from "../sharedComponents/editModal"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#3B5999',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function CustomizedTables({attendanceRecord}) {
    const [showModal,setShowModal] = React.useState(false)
    console.log(showModal)

    const dumyData=[{datStart:'10Am',dayEnd:'10Pm',hors:'10'},
  
  {datStart:'10Am',dayEnd:'10Pm',hors:'7'}
,
{datStart:'10Am',dayEnd:'10Pm',hors:'8'}]
  return (
    <>
    <TableContainer component={Paper} className=''>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time In</StyledTableCell>
            <StyledTableCell align="center">Time Out</StyledTableCell>
            <StyledTableCell align="center">Hours</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dumyData?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{row.datStart ? row.datStart : "-"}</StyledTableCell>
              <StyledTableCell align="center">{row.dayEnd}</StyledTableCell>
              <StyledTableCell align="center">{row.hors}</StyledTableCell>
              <StyledTableCell align="right">
                <div className='flex'>
                    <IconButton onClick={()=>setShowModal(true)}>
                    <EditIcon />
                    </IconButton>
                    <IconButton>
                    <DeleteForeverIcon />
                    </IconButton>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table> 
    </TableContainer>
    {<EditModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
