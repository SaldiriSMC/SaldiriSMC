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
import { useSelector } from 'react-redux';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:'#3B5999',
    color: theme.palette.common.white,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
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


export default function CustomizedTables({attendanceRecord}) {
    const [showModal,setShowModal] = React.useState(false)
    const [deleteModal, setDeleteModal] = React.useState(false)
    console.log(showModal)
    const data = useSelector((state)=> state?.attendance?.attendance?.data)
    const handleDelete = ()=>{

    }
  return (
    <>
    <TableContainer component={Paper} className=''>
      <Table size='small'  aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell>Time In</StyledTableCell>
            <StyledTableCell align="center">Time Out</StyledTableCell>
            <StyledTableCell align="center">Hours</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
       {data?.length > 0 ? 
       <TableBody>
          {data?.map((item, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="left">{item.timeIn ? item.timeIn.split("T")[1] : "-"}</StyledTableCell>
              <StyledTableCell align="center">{item.timeOut ? item.timeOut.split("T")[1] : "-"}</StyledTableCell>
              <StyledTableCell align="center">{item.Difference ? item.Difference : "-"}</StyledTableCell>
              <StyledTableCell align="right">
                <div className='flex'>
                    <IconButton size="small"  onClick={()=>setShowModal(true)}>
                    <EditIcon  />
                    </IconButton>
                    <IconButton size="small" onClick={()=>handleDelete()}>
                    <DeleteForeverIcon  />
                    </IconButton>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> : <StyledTableCell align="left">Record not found</StyledTableCell>} 
      </Table> 
    </TableContainer>
    <EditModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
