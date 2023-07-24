import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_ROLE,
  GET_ROLE
} from "../actions/AddRols/actionTypes";
import {
  getRollSuccess,
  getRollFailure,
  createRollSuccess,
  createRollFailure
} from "../actions/AddRols/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRollsCall(action) {

  console.log("createRollsCall-------------kkkk------ ",action.payload.type)
  try {
    const response = yield call(postRequestWithTenat, action.payload.type == 'designation'? URls.designation : action.payload.type == 'department' ?  URls.department :  URls.status,action.payload.data);
    console.log(response);
    if (response?.status === 200) {
      yield takeLatest(GET_ROLE, getAllRollsCall);
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRollSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRollFailure());
  }
}

function* getAllRollsCall(action) {
  try {
    const response = yield call(getRequestWithTenant, action.payload.type == 'designation'? URls.designation : action.payload.type == 'department' ?  URls.department :  URls.status);
    console.log(response);
    if (response?.status === 200) {
      yield put(getRollSuccess(response.data));
    }
  } catch (error) {
    yield put(getRollFailure());
  }
}
function* updateRollCall(action) {
  try {
    const response = yield call(getRequestWithTenant, action.payload.type == 'designation'? URls.designation : action.payload.type == 'department' ?  URls.department :  URls.status);
    console.log(response);
    if (response?.status === 200) {
      yield put(getRollSuccess(response.data));
    }
  } catch (error) {
    yield put(getRollFailure());
  }
}
function* deleteRollsCall(action) {
  try {
    const response = yield call(getRequestWithTenant, action.payload.type == 'designation'? URls.designation : action.payload.type == 'department' ?  URls.department :  URls.status);
    console.log(response);
    if (response?.status === 200) {
      yield put(getRollSuccess(response.data));
    }
  } catch (error) {
    yield put(getRollFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(ADD_ROLE, createRollsCall);
  yield takeLatest(GET_ROLE, getAllRollsCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
