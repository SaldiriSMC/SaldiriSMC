import React, { useEffect } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
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
import NavBar from "../components/navBar"
import { getAllUser, getAttendanceByHours } from "../actions/Attendance";
const Dashboard = () => {
  


  
  return (
    <div>
      <NavBar />
  <h6>Dashboard Cooming Soon</h6>
    </div>
  );
};

export default Dashboard;
