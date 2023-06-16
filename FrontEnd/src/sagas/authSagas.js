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
  console.log("actionaction", action);
  try {
    const response = yield call(postRequest, URls.loginurl, action?.payload?.credentials);
    console.log(response)
    if (response?.status == '200') {
        localStorage.setItem("accessToken", JSON.stringify(response?.data))
        pushNotification(
          `${response?.data?.message}`,
          "success",
        );
        yield put(logInSuccess(response.data));
        window.location.reload()
      
    } else {
      pushNotification(
        `${response?.data?.message}`,
        "error",
      );
    }

  } catch (error) {
    console.log("error-------",error)
    pushNotification('Get data failure', 'error', 'TOP_CENTER', 1000);
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
