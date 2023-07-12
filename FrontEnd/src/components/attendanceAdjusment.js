import React, { useEffect, useState, useRef } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { makeStyles } from "tss-react/mui";
import Table from "../sharedComponents/table";
import "./comaon.css";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { getAllUser, getAttendanceByHours } from "../actions/Attendance";
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
      background: theme.palette.white?.main,
      padding: "40px 20px 20px 20px",
      borderRadius: 10,
      position: "relative",
      margin: "20px 0",
    },
    btn: {
      display: "flex",
      borderRadius: 10,
      height: 40,
      marginRight: 10,
      width: 100,
      fontWeight: 600,
    },
    aboutImgs: {
      display: "flex",
      justifyContent: "center",
    },
  };
});
const AttendanceAdjusment = ({ attendanceRecord }) => {
  const [deleteTimeInOut, setDeleteTimeInOut] = React.useState({ time: [] });
  const data = useSelector((state) => state.attendance?.allUsers?.data);
  const workedHours = useSelector(
    (state) => state?.attendance?.attendance?.data
  );
  console.log("workedHours", workedHours);
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
    user: data?.length > 0 ? data[0]?.id : "1",
  };
  const chartRef = useRef(null);
  const { classes } = useStyles();
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
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
    if (values.user) {
      dispatch(getAttendanceByHours(values.user));
      calculateTotalWorkedHours();
    }
  }, [values.user]);
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
                defaultValue={`${values.user}`}
              >
                {data?.map((item) => (
                  <MenuItem key={item?.id} value={item?.id}>
                    {`${item.name} / ${item.designationName} / ${item.departmentname}`}
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
         <IconButton size="medium" style={{backgroundColor:"#0075FF", color:"white",}}>
            <AddIcon />
          </IconButton> 
         </div>
          <Table
            deleteTimeInOut={deleteTimeInOut}
            setDeleteTimeInOut={setDeleteTimeInOut}
            value={values.user}
            calculateTotalWorkedHours={calculateTotalWorkedHours}
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
    </div>
  );
};

export default AttendanceAdjusment;
