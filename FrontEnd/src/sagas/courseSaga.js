import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  COURSE_CATEGORY,
  COURSE,
  TOPICS,
  VIDEOS,
  SPEAKERS,
} from "../actions/Courses/actionTypes";
import {
  courseCategorySuccess,
  courseCategoryFailure,
  topicsSuccess,
  topicsFailure,
  videosSuccess,
  videoFailure,
  SpeakersSuccess,
  SpeakersFailure,
} from "../actions/Courses/index";

import { getRequest, getRequest2, getRequestWithOutToken } from "./request";
import URls from "../constants/urls";

//course category generator function
function* courseCategoryCall(action) {
    console.log("actionaction", action);
   try {
     const response = yield call(getRequest, URls.courseCategory);
     console.log(response)
     if (response?.status === 200) {     
       //navigate("/Login")
       localStorage.setItem("data",JSON.stringify(response.data))
       yield put(courseCategorySuccess(response.data));
     }
   } catch (error) {
     // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
     yield put(courseCategoryFailure());
   }
 }
 //course generator function
 function* courseCall(action) {
  console.log("course", action);
 try {
   const response = yield call(getRequest, URls.course+`${action.payload.id}/`);
   console.log(response)
   if (response?.status === 200) {     
     //navigate("/Login")
     localStorage.setItem("data",JSON.stringify(response.data))
     yield put(courseCategorySuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(courseCategoryFailure());
 }
}

//Topics generator function
function* topicsCall(action) {
  console.log("topics", action);
 try {
   const response = yield call(getRequest, URls.topics+`${action.payload.id}/`);
   console.log(response)
   if (response?.status === 200) {     
     //navigate("/Login")
     localStorage.setItem("data",JSON.stringify(response.data))
     yield put(topicsSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(topicsFailure());
 }
}

//Videos generator function

function* vidoesCall(action) {
  console.log("videos", action);
 try {
   const response = yield call(getRequest, URls.videos+`${action.payload.id}/`);
   console.log(response)
   if (response?.status === 200) {     
     //navigate("/Login")
     localStorage.setItem("data",JSON.stringify(response.data))
     yield put(videosSuccess(response.data));
   }
 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(videoFailure());
 }
}
//SPEAKERS generator function

function* SpeakersCall(action) {
  try {
    const response = yield call(
      getRequestWithOutToken,
      URls.Speakers 
    );
    console.log(response);
    if (response?.status === 200) {
      //navigate("/Login")
      yield put(SpeakersSuccess(response.data));
    }
  } catch (error) {
    // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
    yield put(SpeakersFailure());
  }
}

 function* watchGetRequest() {
    yield takeLatest(COURSE_CATEGORY, courseCategoryCall);
    yield takeLatest(COURSE, courseCall);
    yield takeLatest(TOPICS, topicsCall);
    yield takeLatest(VIDEOS, vidoesCall);
    yield takeLatest(SPEAKERS, SpeakersCall);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }