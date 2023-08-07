import React, { useEffect, useState } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
import Table from "../sharedComponents/table";
import { UserAttendanceeConfig, UserAttendanceeEmpolyeConfig } from "../configs/tableConfig";
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
import NavBar from "../components/navBar"
import Box from "@mui/material/Box";
import SideMenu from '../pages/sideMenu'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { updateTime } from "../actions/Attendance";
import { getAllUser, getAttendanceByHours } from "../actions/Attendance";
import { getAttendance } from '../actions/Attendance'
const AttendanceAdjusment = () => {
  const [deleteTimeInOut, setDeleteTimeInOut] = React.useState({ time: [] });
  const [isCreate, setIsCreate] = React.useState(false)
  const [noTimeOut, setNoTimeOut] = React.useState(false)
  const [showModal,setShowModal] = React.useState(false)
  const [userData,setUserData] = React.useState({})
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
    descending: true,
  });
  const [totalRecords, setTotalRecords] = useState(0);
  const user = JSON.parse(localStorage.getItem("accessToken"))
  const userRole =  user?.data?.user?.role
  const userId =  user?.data?.user?.id
  const data = useSelector((state) => state.attendance?.allUsers?.data);
  const attendanceData = useSelector((state) => state?.attendance?.attendance);
  console.log("attendaceData------>>>>", attendanceData)
  const attendanceRecord = useSelector((state)=> state?.attendance?.data?.results)
  useEffect(()=>{
    dispatch(
      getAttendance())
  },[])

  const workedHours = useSelector(
    (state) => state?.attendance?.attendance?.data.result
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

  const calculateTotalWorkedHours = () => {
    const total = workedHours
      ?.map((item) => Number(item.Difference))
      .reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    const fixed = total?.toFixed(4);
    console.log("fixed-------->>>>>>>>", fixed)
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
    if ( !(userRole === 'employee')){
      dispatch(getAllUser());
    }
   
  }, []);

  useEffect(() => {
   setFieldValue("user",data?.length > 0 ? data[0]?.id : "")
  }, [data]);



  useEffect(() => {
    if ((values.user && !(userRole === 'employee'))) {
      dispatch(getAttendanceByHours(values.user));
      calculateTotalWorkedHours();
    }

    if (userRole === 'employee'){
      dispatch(getAttendanceByHours(userId));
      calculateTotalWorkedHours();
    }
  }, [values.user,userId]);


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
            handleDropdownActionsupport(record, val,index)
          },
        });
      }
     
    });
    return result;
  };
  const handleDropdownActionsupport= (data, val,index) => {

    if (val === 'delete' ) {
      handleDelete(data)
      setNoTimeOut(data?.timeOut ? false : true)
    }  
    
    if (val === 'edit' ) {
      setIsCreate(false)
      setShowModal(true);
      setUserData(data);
    }

  }


  const handlePageChange = (e, newPage) => {
    setFilter({
      ...filter,
      pageNumber: newPage + 1,
    });
  };

  const handlePageSizeChange = (e) => {
    setFilter({
      ...filter,
      pageNumber: 1,
      pageSize: e.target.value,
    });
  };

  return (
    <div>
      <NavBar/>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideMenu />
   <Box sx={{width:'100%'}}>
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
            { !(userRole === 'employee') ? 
      (
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

      ) 
      :
      (
        <>
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
        
      </Box>
        </>
      ) 
      }
         

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
          { !(userRole === 'employee')  && (
   <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"15px"}}>
   <IconButton size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{
    if(attendanceData?.result?.length > 0){
      setUserData(workedHours[0])
      setShowModal(true)
      setIsCreate(true)
    }
   
    } }>
      <AddIcon />
    </IconButton> 
   </div>
          )}
      
         <MUITable
            column={ userRole === 'employee' ? UserAttendanceeEmpolyeConfig : UserAttendanceeConfig}
            list={normalizeTableProgram(attendanceData?.data?.result ? attendanceData?.data?.result : [])}
            pagination={attendanceData?.data?.result  > 0 ? (
              {
                totalRecords: totalRecords,
                pageNumber: filter.pageNumber - 1,
                pageSize: filter.pageSize,
                onChangePageNumber: handlePageChange,
                onChangePageSize: handlePageSizeChange,
              }
            ) : null}
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
   </Box>
    </Box>
      



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
        noTimeOut={noTimeOut}

      />
    </div>
  );
};

export default AttendanceAdjusment;
