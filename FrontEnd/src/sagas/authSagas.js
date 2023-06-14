import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, SIGNUP } from "../actions/Auth/actionTypes";
import {
  logInSuccess,
  logInFailure,
  signUpSuccess,
  signUpFailure,
} from "../actions/Auth";
import { postRequest } from "./request";
import { pushNotification } from "../utils/notifications";
import URls from "../constants/urls";


function* signInCall(action) {
  // console.log("actionaction", action);
  try {
    const response = yield call(postRequest, URls.loginurl, action?.payload?.credentials);
    console.log(response)
    if (response?.data?.message?.success) {
      if(response?.data?.data?.user_type === "TEACHER" || response?.data?.data?.user_type === "PHYSICIAN" || response?.data?.data?.user_type === "DENTIST" || response?.data?.data?.user_type === "MHP" || response?.data?.data?.user_type === "AHP" || response?.data?.data?.user_type === "OTHER" ){
        window.location.href = `${URls.baseUrl}api/v1/users/authenticateuser/${response?.data?.data?.access}`
      }else{
        localStorage.setItem("accessToken", JSON.stringify(response?.data?.data?.access))
        action.payload.navigate("/MyCourses")
        yield put(logInSuccess(response.data));
        window.location.reload()
      }
      
    } else {
      pushNotification(
        `${response?.data?.message?.description}`,
        "error",
      );
    }

  } catch (error) {
    // pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
    yield put(logInFailure());
  }
}

// signup call
function* signUpCall(action) {
  // console.log("actionaction", action);
  try {
    const response = yield call(postRequest, URls.signupUrl, action?.payload?.credentials);
    if (response?.data?.message?.success) {
      pushNotification(`${response?.data?.message?.description}`, "success", "TOP_CENTER", 1000);
      yield put(signUpSuccess(response.data));
      action.payload.navigate("/Login")
    } else {
      pushNotification(
        `${response?.data?.message?.description}`,
        "error",
      );
    }
  } catch (error) {
    pushNotification("Get data failure", "error", "TOP_CENTER", 1000);
    yield put(signUpFailure());
  }
}

function* watchGetRequest() {
  yield takeLatest(LOGIN, signInCall);
  yield takeLatest(SIGNUP, signUpCall);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
