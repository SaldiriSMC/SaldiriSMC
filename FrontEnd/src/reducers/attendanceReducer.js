import {
  GET_ATTENDANCE,
  GET_ATTENDANCE_SUCCESS,
  GET_ATTENDANCE_FAILURE,
<<<<<<< HEAD
=======
  USERLIST,
  USERLIST_SUCCESS,
  USERLIST_FAILURE,
  GETATTENDANCEBYHOURS,
  GETATTENDANCEBYHOURS_SUCCESS,
  GETATTENDANCEBYHOURS_FAILURE,
  REMOVE_ATTENDANCE_AT_INDEX,
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
} from "../actions/Attendance/actionTypes";

const initialState = {
  getListLoading: false,
  data: null,
  attendanceData: null,
<<<<<<< HEAD
  attendance: [],
=======
  attendance: null,
  allUsers: null
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
};

// course category reducer funtions
const getAttendance = (state, action) => ({
  ...state,
  getListLoading: true,
});

const getAttendanceSuccess = (state, action) => {
  return {
    ...state,
    getListLoading: false,
    data: action.payload,
  };
};

const getAttendanceFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  data: [],
});

<<<<<<< HEAD
//course reducer functions
// const getCourse = (state, action) => ({
//   ...state,
//   getListLoading: true,
// });

// const getCourseSuccess = (state, action) => {
//   return {
//     ...state,
//     getListLoading: false,
//     data: action.payload,
//   };
// };

// const getCourseFailed = (state, action) => ({
//   ...state,
//   getListLoading: false,
//   data: [],
// });
// // Topics reducer funtions
// const getTopics = (state, action) => ({
//   ...state,
//   getListLoading: true,
// });

// const getTopicsSuccess = (state, action) => {
//   return {
//     ...state,
//     getListLoading: false,
//     data: action.payload,
//   };
// };

// const getTopicseFailed = (state, action) => ({
//   ...state,
//   getListLoading: false,
//   data: [],
// });

// const getVideos = (state, action) => ({
//   ...state,
//   getListLoading: true,
// });

// const getVideosSuccess = (state, action) => {
//   return {
//     ...state,
//     getListLoading: false,
//     data: action.payload,
//   };
// };

// const getVideosFailed = (state, action) => ({
//   ...state,
//   getListLoading: false,
//   data: [],
// });

// // SPEAKERS function

// const getSpeakers = (state, action) => ({
//   ...state,
//   getListLoading: true,
// });

// const getSpeakersSuccess = (state, action) => {
//   return {
//     ...state,
//     getListLoading: false,
//     SpeakersData: action.payload,
//   };
// };

// const getSpeakersFailed = (state, action) => ({
//   ...state,
//   getListLoading: false,
//   SpeakersData: [],
// });

// Videos reducer funtions

const attedanceReducer = (state = initialState, action) => {
  switch (action.type) {
=======
//user list  reducer functions
const getAllUser = (state, action) => ({
  ...state,
  getListLoading: true,
});

const getAllUserSuccess = (state, action) => {
  return {
    ...state,
    getListLoading: false,
    allUsers: action.payload,
  };
};

const getAllUserFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  data: [],
});


//get attendance by hours  reducer functions
const getAttendanceByHours = (state, action) => ({
  ...state,
  getListLoading: true,
});

const getAttendanceByHoursSuccess = (state, action) => {
  console.log("success",action)
  return {
    ...state,
    getListLoading: false,
    attendance: action.payload,
  };
};

const getAttendanceByHoursFailed = (state, action) => {
  console.log("failure",action)
  return {
    ...state,
    getListLoading: false,
    attendance: [],
  };
 
};
const removeAttendenceOnIndex = (state, action) => {
  var data = state?.attendance?.data
  console.log("data-->> ",state?.attendance)
  data.splice(action.payload.index, 1);
  return {
    ...state,
    getListLoading: false,
    attendance: {...state.attendance,data:[...data]},
  };
};

const attedanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ATTENDANCE_AT_INDEX:
      return removeAttendenceOnIndex(state,action)
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
    case GET_ATTENDANCE:
      return getAttendance(state, action);
    case GET_ATTENDANCE_SUCCESS:
      return getAttendanceSuccess(state, action);
    case GET_ATTENDANCE_FAILURE:
      return getAttendanceFailed(state, action);
<<<<<<< HEAD
    // case COURSE:
    //   return getCourse(state, action);
    // case COURSE_SUCCESS:
    //   return getCourseSuccess(state, action);
    // case COURSE_FAILURE:
    //   return getCourseFailed(state, action);
    // case TOPICS:
    //   return getTopics(state, action);
    // case TOPICS_SUCCESS:
    //   return getTopicsSuccess(state, action);
    // case TOPICS_FAILURE:
    //   return getTopicseFailed(state, action);
    // case VIDEOS:
    //   return getVideos(state, action);
    // case VIDEOS_SUCCESS:
    //   return getVideosSuccess(state, action);
    // case VIDEOS_FAILURE:
    //   return getVideosFailed(state, action);
    // case SPEAKERS:
    //   return getSpeakers(state, action);
    // case SPEAKERS_SUCCESS:
    //   return getSpeakersSuccess(state, action);
    // case SPEAKERS_FAILURE:
    //   return getSpeakersFailed(state, action);
=======
    case USERLIST:
      return getAllUser(state, action);
    case USERLIST_SUCCESS:
      return getAllUserSuccess(state, action);
    case USERLIST_FAILURE:
      return getAllUserFailed(state, action);
      case GETATTENDANCEBYHOURS:
        return getAttendanceByHours(state, action);
      case GETATTENDANCEBYHOURS_SUCCESS:
        return getAttendanceByHoursSuccess(state, action);
      case GETATTENDANCEBYHOURS_FAILURE:
        return getAttendanceByHoursFailed(state, action);
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
    default:
      return state;
  }
};

export default attedanceReducer;
