import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_ATTENDANCE,
<<<<<<< HEAD
=======
  USERLIST,
  GETATTENDANCEBYHOURS,
  ATTENDANCEUPDATE,
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
} from "../actions/Attendance/actionTypes";
import {
  getAttendanceSuccess,
  getAttendanceFailure,
<<<<<<< HEAD
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
=======
  getAllUserFailure,
  getAllUserSuccess,
  getAttendanceByHoursSuccess,
  getAttendanceByHoursFailure,
  updateTimeFailure,
  updateTimeSuccess,

} from "../actions/Attendance/index";

import { getRequest, getRequestWithTenant , putRequestWithTenant, getRequest2, getRequestWithOutToken } from "./request";
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

>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
 //course generator function
 function* getAttendanceCall(action) {
  console.log("course", action);
 try {
   const response = yield call(getRequestWithTenant, `${URls.attendanceAdjustment}?limit=10&page=1`);
   console.log(response)
   if (response?.status === 200) {     
<<<<<<< HEAD
     //navigate("/Login")
     localStorage.setItem("data",JSON.stringify(response.data))
=======
     

>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
     yield put(getAttendanceSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
<<<<<<< HEAD
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
=======
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
     yield put(getAttendanceByHoursSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(getAttendanceByHoursFailure());
 }
}

// //update  generator function

function* updateTime(action) {
  console.log("updateTime fun add ",action.payload)
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
//   console.log("updateTime fun add ",action.payload)
//   let data = localStorage.getItem("accessToken")
//   data = JSON.parse(data)
//   const id = data?.data?.user?.id
//   console.log("action--------->>>>>>>>",action.payload)
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
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
    // yield takeLatest(SPEAKERS, SpeakersCall);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }