import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, SIGNUP, LOGOUT } from "../actions/Auth/actionTypes";
import {
  logInSuccess,
  logInFailure,
  signUpSuccess,
  signUpFailure,
  loderTrue,
  loderFalse,
} from "../actions/Auth";
import { postRequest } from "./request";
import { pushNotification } from "../utils/notifications";
import URls from "../constants/urls";


function* signInCall(action) {
  console.log("actionaction", action);
  yield put(loderTrue());

  try {
    const response = yield call(postRequest, URls.loginurl, action?.payload?.credentials);
    yield put(loderFalse());
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
    pushNotification('Network Error', 'error', 'TOP_CENTER', 1000);
    yield put(logInFailure());
    yield put(loderFalse());
  }
}

// signup call
function* signUpCall(action) {
  // console.log("actionaction", action);
  yield put(loderTrue());
  try {
    const response = yield call(postRequest, URls.signupUrl, action?.payload?.credentials);
    yield put(loderFalse());
    console.log("response catch",response)
    if (response?.data?.data?.user) {
      pushNotification(`${response?.data.message}`, "success", "TOP_CENTER", 1000);
      yield put(signUpSuccess(response.data));
      action.payload.navigate("/")
    } else {
      console.log("response eeeeeeeee catch",response?.data.message )
      pushNotification(
        `${response?.data.message}`,
        "error",
      );
    }
  } catch (error) {
    console.log("error catch",error)
    pushNotification("Get data failure", "error", "TOP_CENTER", 1000);
    yield put(signUpFailure());
    yield put(loderFalse());
  }
}
// logOut call
function* logOutCall(action) {
  console.log(action?.payload?.refreshToken,"actionaction", action);
  yield put(loderTrue());
  try {
    const response = yield call(postRequest, URls.logOut, action?.payload.data);
    yield put(loderFalse());
    console.log("response catch",response)
    if (response?.data.message == 'User loged out successfully') {
      localStorage.removeItem("accessToken"); 
      // window.location.reload()
      action.payload.navigate("/")
    } else {

    
    }
  } catch (error) {
    console.log("error catch",error)
    pushNotification("Get data failure", "error", "TOP_CENTER", 1000);
    yield put(signUpFailure());
    yield put(loderFalse());
  }
}

function* watchGetRequest() {
  yield takeLatest(LOGIN, signInCall);
  yield takeLatest(SIGNUP, signUpCall);
  yield takeLatest(LOGOUT, logOutCall);
}

export default function* sagas() {
  yield all([watchGetRequest()]);
}
