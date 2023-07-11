import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ATTENDANCE,
  USERLIST,
  GETATTENDANCEBYHOURS,
  ATTENDANCEUPDATE
} from "../actions/Attendance/actionTypes";
import {
  getAttendanceSuccess,
  getAttendanceFailure,
  getAllUserFailure,
  getAllUserSuccess,
  getAttendanceByHoursSuccess,
  getAttendanceByHoursFailure,
  updateTimeFailure,
  updateTimeSuccess

} from "../actions/Attendance/index";

import { getRequest, getRequestWithTenant, getRequest2, getRequestWithOutToken } from "./request";
import URls from "../constants/urls";

// //course category generator function
function* getUserList(action) {
    console.log("actionaction", action);
   try {
     const response = yield call(getRequestWithTenant, URls.getAllUsers);
     console.log(response)
     if (response?.status === 200) {     
       //navigate("/Login")
       localStorage.setItem("data",JSON.stringify(response.data))
       yield put(getAllUserSuccess(response.data));
     }
   } catch (error) {
     // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
     yield put(getAttendanceFailure());
   }
 }

 //course generator function
 function* getAttendanceCall(action) {
  console.log("course", action);
 try {
   const response = yield call(getRequestWithTenant, `${URls.attendanceAdjustment}?limit=10&page=1`);
   console.log(response)
   if (response?.status === 200) {     
     //navigate("/Login")
     localStorage.setItem("data",JSON.stringify(response.data))
     yield put(getAttendanceSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(getAllUserFailure());
 }
}

// //get attendace by hours generator function
function* getAttendanceByHoursCall(action) {
  console.log("action------>>>>>>>",action.payload)
 try {
   const response = yield call(getRequestWithTenant, URls.getAttendanceByHours+`/${action.payload}`);
   console.log(response)
   if (response?.status === 200) {     
     //navigate("/Login")
     localStorage.setItem("data",JSON.stringify(response.data))
     yield put(getAttendanceByHoursSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(getAttendanceByHoursFailure());
 }
}

// //update  generator function

function* updateTime(action) {
  console.log("updateTime fun add ")
 try {
   const response = yield call(getRequestWithTenant, URls.attendanceAdjustment+`${action.payload.date}/`);
   console.log(response)
   if (response?.status === 200) {     
     //navigate("/Login")
     yield put(updateTimeSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(updateTimeFailure());
 }
}
// //SPEAKERS generator function

// function* SpeakersCall(action) {
//   try {
//     const response = yield call(
//       getRequestWithOutToken,
//       URls.Speakers 
//     );
//     console.log(response);
//     if (response?.status === 200) {
//       //navigate("/Login")
//       yield put(SpeakersSuccess(response.data));
//     }
//   } catch (error) {
//     // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
//     yield put(SpeakersFailure());
//   }
// }

 function* watchGetRequest() {
    yield takeLatest(GET_ATTENDANCE, getAttendanceCall);
    yield takeLatest(USERLIST, getUserList);
    yield takeLatest(GETATTENDANCEBYHOURS, getAttendanceByHoursCall);
    yield takeLatest(ATTENDANCEUPDATE, updateTime);
    // yield takeLatest(SPEAKERS, SpeakersCall);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }