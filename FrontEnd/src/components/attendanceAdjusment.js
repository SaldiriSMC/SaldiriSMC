import React from "react";
import Tabel from "../sharedComponents/customizedTabel";
import { Typography } from "@mui/material";
const attendanceAdjusment = ({attendanceRecord}) => {
  return (
    <div>
      <Typography variant="h1" component="h2" className="py-3">
        Attendance
      </Typography>
      ;
      <Tabel attendanceRecord={attendanceRecord} />
    </div>
  );
};

export default attendanceAdjusment;
