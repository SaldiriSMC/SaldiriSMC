import React, { useEffect } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
import Table from "../sharedComponents/table";
import { UserAttendanceeConfig } from "../configs/tableConfig";
import MUITable from "../sharedComponents/MUITable";
import "./comaon.css";
import { IconButton } from '@mui/material';
import EditModal from "../sharedComponents/editModal";
import DeleteModal from "../sharedComponents/deleteModal";
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAttendance,
  sandEmailInviteUser,
  getAllUserByDeptDes
} from "../service/users";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { updateTime } from "../actions/Attendance";
import { getAllUser, getAttendanceByHours } from "../actions/Attendance";
const AttendanceAdjusment = () => {
  const [deleteTimeInOut, setDeleteTimeInOut] = React.useState({ time: [] });
  const [isCreate, setIsCreate] = React.useState(false)
  const [showModal,setShowModal] = React.useState(false)
  const [userData,setUserData] = React.useState({})
  const data = useSelector((state) => state.attendance?.allUsers?.data);
  const attendanceData = useSelector((state) => state?.attendance?.attendance?.data);
  const workedHours = useSelector(
    (state) => state?.attendance?.attendance?.data
  );  
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState({});

    const handleDelete = (item) => {
      setShowDeleteModal(true);
      setDeleteId({ id: item.timeId, attendanceid: item?.attendenceid });
    }
    const handleDeleteModel = (item) => {
    const totalHours = calculateTotalWorkedHours();
    let payload = {
          id: deleteId.id,
          attendanceId: deleteId.attendanceid ,
    };
    // setLoader(true);
    deleteAttendance(payload)
    .then((response) => {
      if (response.data) {
        dispatch(getAttendanceByHours(values.user));
        setShowDeleteModal(false);
      }
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
      // setLoader(false);
  });
  

    
  };
  console.log("data----------------------->>>>>>>>>>>>>  data", data);
  const calculateTotalWorkedHours = () => {
    const total = workedHours
      ?.map((item) => Number(item.Difference))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    const fixed = total?.toFixed(2);
    return fixed;
  };
  const totalWorkedHours = calculateTotalWorkedHours();
  const dispatch = useDispatch();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const initialValues = {
    user: '',
  };
  const { handleChange,values,setFieldValue } =
    useFormik({
      initialValues,
      onSubmit: async (data) => {
        dispatch();
      },
    });
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  useEffect(() => {
    console.log("data of users --> ",data)
   setFieldValue("user",data?.length > 0 ? data[0]?.id : "")
  }, [data]);

  console.log("useruseruser----------------",values.user)

  useEffect(() => {
    if (values.user) {
      dispatch(getAttendanceByHours(values.user));
      calculateTotalWorkedHours();
    }
  }, [values.user]);


  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      if (  record.timeIn){
        result.push({
          timeIn: record.timeIn
            ? format(new Date(record.timeIn), "h:mm:ss a")
            : "-",
            timeOut: record.timeOut
            ? format(new Date(record.timeOut), "h:mm:ss a")
            : "-",
          hours: record.Difference ? record.Difference : "-",
          action: {
            change: (val) =>
            handleDropdownActionsupport(record, val,index),
          },
        });
      }
     
    });
    return result;
  };
  const handleDropdownActionsupport= (data, val,index) => {

    if (val === 'delete' ) {
      handleDelete(data)
    }  
    
    if (val === 'edit' ) {
      setIsCreate(false)
      setShowModal(true);
      setUserData(data);
    }

  }
  return (
    <div>
      <Grid
        container
        flexDirection="row"
        display="flex"
        justifyContent=""
        spacing={1}
        sx={{ p: 1 }}
      >
        <Grid
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          item
          sm={12}
          md={6}
        >
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                pl: 3,
                width: "40ch",
                textAlign: "start",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                id="user"
                name="user"
                onChange={handleChange}
                select
                InputProps={{
                  sx: {
                    "& input": {
                      textAlign: "left",
                    },
                  },
                }}
                value={`${values.user}`}
              >
                {data?.map((item) => (
                  <MenuItem key={item?.id} value={item?.id}>
                    {`${item.name?? "-"} / ${item.designationName ?? "-"} / ${item.departmentname ?? "-"}`}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>

          <div style={{ textAlign: "end" }}>
            <h6>
              {" "}
              Date: <span style={{ fontWeight: "bold" }}>{date}</span>
            </h6>
            <h6>
              {" "}
              Total Hours :{" "}
              <span style={{ fontWeight: "bold" }}>{`${
                totalWorkedHours ? totalWorkedHours : "0.00"
              } HRs`}</span>
            </h6>
          </div>
        </Grid>
        <Grid
          item
          spacing={2}
          padding={10}
          justifyContent="start"
          alignContent="flex-start"
          alignItems="start"
          container
          md={6}
          sm={12}
        >
          <Grid item sm={12}></Grid>
          <>
            <Grid
              item
              sm={6}
              style={{ display: "flex", justifyContent: "flex-end" }}
            ></Grid>
          </>
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection="row"
        display="flex"
        justifyContent=""
        sx={{ p: 1 }}
      >
        <Grid
          sx={{ pl: 3 }}
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          item
          sm={12}
          md={6}
        >
         <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"15px"}}>
         <IconButton size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{
          if(attendanceData?.length > 0){
            setUserData(workedHours[0])
            setShowModal(true)
            setIsCreate(true)
          }
         
          } }>
            <AddIcon />
          </IconButton> 
         </div>
         <MUITable
            column={UserAttendanceeConfig}
            list={normalizeTableProgram(attendanceData ?? [])}

          />
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              my: 3,
            }}
          ></Grid>
        </Grid>
        <Grid
          item
          spacing={2}
          justifyContent="center"
          alignContent="flex-start"
          alignItems="start"
          container
          md={6}
          sm={12}
        >
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
          </>
        </Grid>
      </Grid>
      <EditModal
        showModal={showModal}
        userData={userData}
        setShowModal={setShowModal}
        value={values.user}
        calculateTotalWorkedHours={calculateTotalWorkedHours}
        isCreate={isCreate}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        handleDeleteModel={handleDeleteModel}

      />
    </div>
  );
};

export default AttendanceAdjusment;
