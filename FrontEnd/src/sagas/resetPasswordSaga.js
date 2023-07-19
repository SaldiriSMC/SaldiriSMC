import { all, call, put, takeLatest } from "redux-saga/effects";
import {EMAILVERIFICATION, RESETPASSWORD, EMAILSTATUS} from "../actions/Auth/passwordReset/actionTypes";
import {
    emailVerificationSuccess,
    emailVerificationFailure,
    resetPasswordSuccess,
    resetPasswordFailure,
    emailStatusSuccess,
    emailStatusFailure
} from "../actions/Auth/passwordReset"

import { postRequest, patchRequest } from "./request";
import { pushNotification } from "../utils/notifications";
import URls from "../constants/urls";

function* emailVerificationCall(action) {
     console.log("actionaction", action);
    try {
      const response = yield call(postRequest, URls.emailVerificationUrl, action?.payload);
      console.log(response)
      if (response?.data?.message?.success) {     
        //navigate("/Login")
        localStorage.setItem("data",JSON.stringify(response.data))
        pushNotification(
          "We send the verification link on your email please check your email",
          "success",
        );
        yield put(emailVerificationSuccess(response.data));
      } else {
           pushNotification(
          `${response?.data?.message}`,
          "error",
        );
      }
  
    } catch (error) {
      // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
      yield put(emailVerificationFailure());
    }
  }

  function* resetPasswordCall(action) {
    console.log("actionaction", action);
   try {
     const response = yield call(postRequest, `${URls.resetPassword}?token=${action?.payload?.LogIntoken}`, action?.payload?.credentials);
     console.log(response)
     if (response?.status === 200) {      
       pushNotification(
         "Password Change Successfully",
         "success",
       );
       yield put(resetPasswordSuccess(response.data));
       action.payload.navigate("/")
     } else {
          pushNotification(
         `${response?.data?.message}`,
         "error",
         "TOP_CENTER",
       );
     }
 
   } catch (error) {
     // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
     yield put(resetPasswordFailure());
   }
 }

 function* emailStatusdCall(action) {
  console.log("actionaction", action);
 try {
   const response = yield call(patchRequest, URls.emailStatus, action?.payload);
   console.log(response)
   if (response?.data?.message?.success) {     
     localStorage.setItem("data",JSON.stringify(response.data))
     pushNotification(
       "Your email has been verified",
       "success",
     );
     yield put(emailStatusSuccess(response.data));
   } else {
        pushNotification(
       `Sorry! Your link was expired`,
       "error",
     );
   }

 } catch (error) {
   // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
   yield put(emailStatusFailure());
 }
}



  function* watchGetRequest() {
    yield takeLatest(EMAILVERIFICATION, emailVerificationCall);
   yield takeLatest(RESETPASSWORD, resetPasswordCall);
   yield takeLatest(EMAILSTATUS, emailStatusdCall);
  }
  
  export default function* sagas() {
    yield all([watchGetRequest()]);
  }