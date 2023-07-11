import {
  GET_ATTENDANCE,
  GET_ATTENDANCE_SUCCESS,
  GET_ATTENDANCE_FAILURE,
  USERLIST,
  USERLIST_SUCCESS,
  USERLIST_FAILURE,
  GETATTENDANCEBYHOURS,
  GETATTENDANCEBYHOURS_SUCCESS,
  GETATTENDANCEBYHOURS_FAILURE

} from "../actions/Attendance/actionTypes";

const initialState = {
  getListLoading: false,
  data: null,
  attendanceData: null,
  attendance: null,
  allUsers: null
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

const attedanceReducer = (state = initialState, action) => {
  console.log("type---------->>>>>>", action)
  switch (action.type) {
    case GET_ATTENDANCE:
      return getAttendance(state, action);
    case GET_ATTENDANCE_SUCCESS:
      return getAttendanceSuccess(state, action);
    case GET_ATTENDANCE_FAILURE:
      return getAttendanceFailed(state, action);
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
    default:
      return state;
  }
};

export default attedanceReducer;
