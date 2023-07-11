import {
    GET_ATTENDANCE,
    GET_ATTENDANCE_SUCCESS,
    GET_ATTENDANCE_FAILURE,
    USERLIST_FAILURE,
    USERLIST_SUCCESS,
    USERLIST,
    GETATTENDANCEBYHOURS,
    GETATTENDANCEBYHOURS_SUCCESS,
    GETATTENDANCEBYHOURS_FAILURE
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
  
//     // Course action functions
//     export const course = (data) => ({
//       type: COURSE,
//       payload: data,
//     });
    
//     export const courseSuccess = (data) => ({
//       type: COURSE_SUCCESS,
//       payload: data,
//     });
    
//     export const courseFailure = () => ({
//       type: COURSE_FAILURE,
//     });

//      // Topics action functions

//     export const topics = (data) => ({
//       type: TOPICS,
//       payload: data,
//     });
    
//     export const topicsSuccess = (data) => ({
//       type: TOPICS_SUCCESS,
//       payload: data,
//     });
    
//     export const topicsFailure = () => ({
//       type: TOPICS_FAILURE,
//     });

//     // Course action functions

//     export const videos = (data) => ({
//       type: VIDEOS,
//       payload: data,
//     });
    
//     export const videosSuccess = (data) => ({
//       type: VIDEOS_SUCCESS,
//       payload: data,
//     });
    
//     export const videoFailure = () => ({
//       type: VIDEOS_FAILURE,
// });
    
//     // Speakers action functions

//     export const Speakers = (data) => ({
//       type: SPEAKERS,
//       payload: data,
//     });
    
//     export const SpeakersSuccess = (data) => ({
//       type: SPEAKERS_SUCCESS,
//       payload: data,
//     });
    
//     export const SpeakersFailure = () => ({
//       type: SPEAKERS_FAILURE,
//     });


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
  
  export const getAttendanceByHoursFailure = () => ({
    type: GETATTENDANCEBYHOURS_FAILURE,
  });