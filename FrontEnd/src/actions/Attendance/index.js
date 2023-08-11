import {
    GET_ATTENDANCE,
    GET_ATTENDANCE_SUCCESS,
    GET_ATTENDANCE_FAILURE,
    USERLIST_FAILURE,
    USERLIST_SUCCESS,
    USERLIST,
    GETATTENDANCEBYHOURS,
    GETATTENDANCEBYHOURS_SUCCESS,
    GETATTENDANCEBYHOURS_FAILURE,
    ATTENDANCEUPDATE,
    ATTENDANCEUPDATE_SUCCESS,
    ATTENDANCEUPDATE_FAILURE,
    REMOVE_ATTENDANCE_AT_INDEX,
    ATTENDANCEDELETE,
    ATTENDANCEDELETE_SUCCESS,
    ATTENDANCEDELETE_FAILURE
  } from "./actionTypes";

  // Course Category action functions
  export const getAttendance = (data) => ({
    type: GET_ATTENDANCE,
    payload: data,
  });
  
  export const getAttendanceSuccess = (data) => ({
    type: GET_ATTENDANCE_SUCCESS,
    payload: data,
  });
  
  export const getAttendanceFailure = () => ({
    type: GET_ATTENDANCE_FAILURE,
  });
  
    // update time  action functions
    export const updateTime = (data) => ({
      type: ATTENDANCEUPDATE,
      payload: data,
    });
    
    export const updateTimeSuccess = (data) => ({
      type: ATTENDANCEUPDATE_SUCCESS,
      payload: data,
    });
    
    export const updateTimeFailure = () => ({
      type: ATTENDANCEUPDATE_FAILURE,
    });



      // all user action functions
  export const getAllUser = (data) => ({
    type: USERLIST,
    payload: data,
  });
  
  export const getAllUserSuccess = (data) => ({
    type: USERLIST_SUCCESS,
    payload: data,
  });
  
  export const getAllUserFailure = () => ({
    type: USERLIST_FAILURE,
  });


  export const getAttendanceByHours = (data) => ({
    type: GETATTENDANCEBYHOURS,
    payload: data,
  });
  
  export const getAttendanceByHoursSuccess = (data) => ({
    type: GETATTENDANCEBYHOURS_SUCCESS,
    payload: data,
  });
  export const removeAttendenceOnIndexAction = (data) => ({
    type: REMOVE_ATTENDANCE_AT_INDEX,
    payload: data,
  });
  export const getAttendanceByHoursFailure = () => ({
    type: GETATTENDANCEBYHOURS_FAILURE,
  });

  

  