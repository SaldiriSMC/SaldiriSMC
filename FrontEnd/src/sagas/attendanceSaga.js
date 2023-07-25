import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ATTENDANCE,
  USERLIST,
  GETATTENDANCEBYHOURS,
  ATTENDANCEUPDATE,
} from "../actions/Attendance/actionTypes";
import {
  getAttendanceSuccess,
  getAttendanceFailure,
  getAllUserFailure,
  getAllUserSuccess,
  getAttendanceByHoursSuccess,
  getAttendanceByHoursFailure,
  updateTimeFailure,
  updateTimeSuccess,

} from "../actions/Attendance/index";

import { getRequestWithTenant , putRequestWithTenant, getRequest2 } from "./request";
import URls from "../constants/urls";

// //course category generator function
function* getUserList(action) {

   try {
     const response = yield call(getRequestWithTenant, URls.getAllUsers);

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

 try {
   const response = yield call(getRequestWithTenant, `${URls.attendanceAdjustment}?limit=10&page=1`);

   if (response?.status === 200) {     
     

     yield put(getAttendanceSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(getAllUserFailure());
 }
}

// //get attendace by hours generator function
function* getAttendanceByHoursCall(action) {

 try {
   const response = yield call(getRequestWithTenant, URls.getAttendanceByHours+`/${action.payload}`);

   if (response?.status === 200) {     
     //navigate("/Login")
     yield put(getAttendanceByHoursSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(getAttendanceByHoursFailure());
 }
}

// //update  generator function

function* updateTime(action) {

 try {
   const response = yield call(putRequestWithTenant, URls.attendanceAdjustment+`/${action?.payload?.time[0].attendanceid}`, action.payload);
   if (response?.status === 200) {     
     //navigate("/Login")
     yield put(updateTimeSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(updateTimeFailure());
 }
}

// function* deleteTime(action) {
//   let data = localStorage.getItem("accessToken")
//   data = JSON.parse(data)
//   const id = data?.data?.user?.id
//  try {
//    const response = yield call(putRequestWithTenant, URls.attendanceAdjustment+`/${action?.payload?.attendanceid}`, action.payload);
//    if (response?.status === 200) {     
//      //navigate("/Login")
//      yield put(deleteTimeSuccess(response.data));
//    }
//  } catch (error) {
//    // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
//    yield put(deleteTimeFailure());
//  }
// }

 function* watchGetRequest() {
    yield takeLatest(GET_ATTENDANCE, getAttendanceCall);
    yield takeLatest(USERLIST, getUserList);
    yield takeLatest(GETATTENDANCEBYHOURS, getAttendanceByHoursCall);
    yield takeLatest(ATTENDANCEUPDATE, updateTime);
    // yield takeLatest(ATTENDANCEDELETE, deleteTime);
    // yield takeLatest(SPEAKERS, SpeakersCall);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }