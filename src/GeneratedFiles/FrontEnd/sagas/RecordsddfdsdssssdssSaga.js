import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_RECORDSDDFDSDSSSSDSS,
  GET_RECORDSDDFDSDSSSSDSS,
  UPDATE_RECORDSDDFDSDSSSSDSS,
  DELETE_RECORDSDDFDSDSSSSDSS
} from "../actions/Recordsddfdsdssssdss/actionTypes";
import {
  createRecordsddfdsdssssdssSuccess,
  createRecordsddfdsdssssdssFailure,
  getRecordsddfdsdssssdssSuccess,
  getRecordsddfdsdssssdssFailure,
  updateRecordsddfdsdssssdssSuccess,
  updateRecordsddfdsdssssdssFailure,
  deleteRecordsddfdsdssssdssSuccess,
  deleteRecordsddfdsdssssdssFailure
} from "../actions/Recordsddfdsdssssdss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRecordsddfdsdssssdssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Recordsddfdsdssssdss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRecordsddfdsdssssdssSuccess(response.data));
      action.payload.navigate("/Recordsddfdsdssssdss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRecordsddfdsdssssdssFailure());
  }
}

function* updateRecordsddfdsdssssdssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Recordsddfdsdssssdss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRecordsddfdsdssssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRecordsddfdsdssssdssFailure());
  }
}

function* deleteRecordsddfdsdssssdssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Recordsddfdsdssssdss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteRecordsddfdsdssssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteRecordsddfdsdssssdssFailure());
  }
}

function* getRecordsddfdsdssssdssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Recordsddfdsdssssdss}`);

    if (response?.status === 200) {
      yield put(getRecordsddfdsdssssdssSuccess(response.data));
    }
  } catch (error) {
    yield put(getRecordsddfdsdssssdssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_RECORDSDDFDSDSSSSDSS, createRecordsddfdsdssssdssCall);
  yield takeLatest(GET_RECORDSDDFDSDSSSSDSS, getRecordsddfdsdssssdssCall);
  yield takeLatest(UPDATE_RECORDSDDFDSDSSSSDSS, updateRecordsddfdsdssssdssCall);
  yield takeLatest(DELETE_RECORDSDDFDSDSSSSDSS, deleteRecordsddfdsdssssdssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
