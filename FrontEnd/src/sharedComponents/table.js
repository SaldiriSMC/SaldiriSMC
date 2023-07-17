import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format } from "date-fns";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditModal from "../sharedComponents/editModal";
import DeleteModal from "../sharedComponents/deleteModal";
import AddModal from "../sharedComponents/addModal";
import { updateTime, getAttendanceByHours } from "../actions/Attendance";
import { useDispatch, useSelector } from "react-redux";
import { removeAttendenceOnIndexAction } from "../actions/Attendance";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3B5999",
    color: theme.palette.common.white,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({
  setDeleteTimeInOut,
  deleteTimeInOut,
  value,
  calculateTotalWorkedHours,
  userData,
  setUserData,
  isCreate,
  setIsCreate,
  setShowModal,
  showModal,
}) {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const data = useSelector((state) => state?.attendance?.attendance?.data);
  const [deleteId, setDeleteId] = React.useState({});

    const handleDelete = (item) => {
      setShowDeleteModal(true);
      setDeleteId({ id: item.timeId, attendanceid: item.attendenceid });
    }
    const handleDeleteModel = (item) => {
    const totalHours = calculateTotalWorkedHours();
    let payload = {
      time: [
        {
          isDeleted: true,
          id: deleteId.id,
          attendanceid: deleteId.attendanceid ,
          totalHours: totalHours,
        },
      ],
    };
    console.log("payloadpayload------------",payload)
    dispatch(updateTime(payload));
    setTimeout(() => {
      dispatch(getAttendanceByHours(value));
    }, 100);
    setShowDeleteModal(false);
  };
  return (
    <>
      <TableContainer component={Paper} className="">
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Time In</StyledTableCell>
              <StyledTableCell align="center">Time Out</StyledTableCell>
              <StyledTableCell align="center">Hours</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          {data?.length > 0 ? (
            <TableBody>
              {data?.map(
                (item, index) =>
                  item.timeIn && (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="left">
                        {item.timeIn
                          ? format(new Date(item.timeIn), "h:mm:ss a")
                          : "-"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.timeOut
                          ? format(new Date(item.timeOut), "h:mm:ss a")
                          : "-"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.Difference ? item.Difference : "-"}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <div className="flex">
                          <IconButton
                            size="small"
                            onClick={() => {
                              setIsCreate(false)
                              setShowModal(true);
                              setUserData(item);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={() => handleDelete(item)}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
              )}
            </TableBody>
          ) : (
            <StyledTableCell align="left">Record not found</StyledTableCell>
          )}
        </Table>
      </TableContainer>
      <EditModal
        showModal={showModal}
        userData={userData}
        setShowModal={setShowModal}
        value={value}
        calculateTotalWorkedHours={calculateTotalWorkedHours}
        isCreate={isCreate}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        handleDeleteModel={handleDeleteModel}

      />
    </>
  );
}
