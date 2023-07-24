import {
    GET_ATTENDANCE,
    GET_ATTENDANCE_SUCCESS,
    GET_ATTENDANCE_FAILURE,
<<<<<<< HEAD
    COURSE,
    COURSE_SUCCESS,
    COURSE_FAILURE,
    TOPICS,
    TOPICS_SUCCESS,
    TOPICS_FAILURE,
    VIDEOS,
    VIDEOS_SUCCESS,
    VIDEOS_FAILURE,
    SPEAKERS,
    SPEAKERS_SUCCESS,
    SPEAKERS_FAILURE,
=======
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
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
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
  
<<<<<<< HEAD
    // Course action functions
    export const course = (data) => ({
      type: COURSE,
      payload: data,
    });
    
    export const courseSuccess = (data) => ({
      type: COURSE_SUCCESS,
      payload: data,
    });
    
    export const courseFailure = () => ({
      type: COURSE_FAILURE,
    });

     // Topics action functions

    export const topics = (data) => ({
      type: TOPICS,
      payload: data,
    });
    
    export const topicsSuccess = (data) => ({
      type: TOPICS_SUCCESS,
      payload: data,
    });
    
    export const topicsFailure = () => ({
      type: TOPICS_FAILURE,
    });

    // Course action functions

    export const videos = (data) => ({
      type: VIDEOS,
      payload: data,
    });
    
    export const videosSuccess = (data) => ({
      type: VIDEOS_SUCCESS,
      payload: data,
    });
    
    export const videoFailure = () => ({
      type: VIDEOS_FAILURE,
});
    
    // Speakers action functions

    export const Speakers = (data) => ({
      type: SPEAKERS,
      payload: data,
    });
    
    export const SpeakersSuccess = (data) => ({
      type: SPEAKERS_SUCCESS,
      payload: data,
    });
    
    export const SpeakersFailure = () => ({
      type: SPEAKERS_FAILURE,
    });
=======
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
  export const removeAttendenceOnIndexAction = (data) => ({
    type: REMOVE_ATTENDANCE_AT_INDEX,
    payload: data,
  });
  export const getAttendanceByHoursFailure = () => ({
    type: GETATTENDANCEBYHOURS_FAILURE,
  });

  

  
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
