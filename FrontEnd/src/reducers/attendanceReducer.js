import {
  GET_ATTENDANCE,
  GET_ATTENDANCE_SUCCESS,
  GET_ATTENDANCE_FAILURE,
} from "../actions/Attendance/actionTypes";

const initialState = {
  getListLoading: false,
  data: null,
  attendanceData: null,
  attendance: [],
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
    case GET_ATTENDANCE:
      return getAttendance(state, action);
    case GET_ATTENDANCE_SUCCESS:
      return getAttendanceSuccess(state, action);
    case GET_ATTENDANCE_FAILURE:
      return getAttendanceFailed(state, action);
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
    default:
      return state;
  }
};

export default attedanceReducer;
