import React, { useEffect } from 'react'
import NavBar from "../components/navBar"
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
