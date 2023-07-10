import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ATTENDANCE,
} from "../actions/Attendance/actionTypes";
import {
  getAttendanceSuccess,
  getAttendanceFailure,
} from "../actions/Attendance/index";

import { getRequest, getRequestWithTenant, getRequest2, getRequestWithOutToken } from "./request";
import URls from "../constants/urls";

//course category generator function
// function* courseCategoryCall(action) {
//     console.log("actionaction", action);
//    try {
//      const response = yield call(getRequest, URls.attendanceAdjustment);
//      console.log(response)
//      if (response?.status === 200) {     
//        //navigate("/Login")
//        localStorage.setItem("data",JSON.stringify(response.data))
//        yield put(getAttendanceSuccess(response.data));
//      }
//    } catch (error) {
//      // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
//      yield put(getAttendanceFailureFailure());
//    }
//  }
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
   yield put(getAttendanceFailure());
 }
}

// //Topics generator function
// function* topicsCall(action) {
//   console.log("topics", action);
//  try {
//    const response = yield call(getRequest, URls.topics+`${action.payload.id}/`);
//    console.log(response)
//    if (response?.status === 200) {     
//      //navigate("/Login")
//      localStorage.setItem("data",JSON.stringify(response.data))
//      yield put(topicsSuccess(response.data));
//    }
//  } catch (error) {
//    // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
//    yield put(topicsFailure());
//  }
// }

// //Videos generator function

// function* vidoesCall(action) {
//   console.log("videos", action);
//  try {
//    const response = yield call(getRequest, URls.videos+`${action.payload.id}/`);
//    console.log(response)
//    if (response?.status === 200) {     
//      //navigate("/Login")
//      localStorage.setItem("data",JSON.stringify(response.data))
//      yield put(videosSuccess(response.data));
//    }
//  } catch (error) {
//    // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
//    yield put(videoFailure());
//  }
// }
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
    // yield takeLatest(COURSE, courseCall);
    // yield takeLatest(TOPICS, topicsCall);
    // yield takeLatest(VIDEOS, vidoesCall);
    // yield takeLatest(SPEAKERS, SpeakersCall);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }