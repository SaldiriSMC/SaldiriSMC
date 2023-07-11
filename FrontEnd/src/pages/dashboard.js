import NavBar from "../components/navBar"
import React, {useEffect, useState} from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import { emailVerification } from "../actions/Auth/passwordReset";
import AttendanceAdjusment from "../components/attendanceAdjusment"
import { useDispatch, useSelector } from 'react-redux'
import { getAttendance } from '../actions/Attendance'
const Dashboard = () => {
  const dispatch = useDispatch()
  const attendanceRecord = useSelector((state)=> state?.attendance?.data?.results)
  useEffect(()=>{
    dispatch(
      getAttendance())
  },[])

  return (
    <div>
    <NavBar />
    <AttendanceAdjusment attendanceRecord={attendanceRecord} />
    </div>
  )
}

export default Dashboard
