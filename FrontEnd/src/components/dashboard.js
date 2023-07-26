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
import SideMenu from '../pages/sideMenu'
import NavBar from "../components/navBar"
import CssBaseline from '@mui/material/CssBaseline';
import { getAllUser, getAttendanceByHours } from "../actions/Attendance";
const Dashboard = () => {
  


  
  return (
    <>
    <NavBar/>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideMenu />
      <h6 className="p-5">Dashboard Cooming Soon</h6>
    </Box>
    
    </>

  );
};

export default Dashboard;
