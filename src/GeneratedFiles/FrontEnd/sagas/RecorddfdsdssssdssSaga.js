import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_RECORDDFDSDSSSSDSS,
  GET_RECORDDFDSDSSSSDSS,
  UPDATE_RECORDDFDSDSSSSDSS,
  DELETE_RECORDDFDSDSSSSDSS
} from "../actions/Recorddfdsdssssdss/actionTypes";
import {
  createRecorddfdsdssssdssSuccess,
  createRecorddfdsdssssdssFailure,
  getRecorddfdsdssssdssSuccess,
  getRecorddfdsdssssdssFailure,
  updateRecorddfdsdssssdssSuccess,
  updateRecorddfdsdssssdssFailure,
  deleteRecorddfdsdssssdssSuccess,
  deleteRecorddfdsdssssdssFailure
} from "../actions/Recorddfdsdssssdss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRecorddfdsdssssdssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Recorddfdsdssssdss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRecorddfdsdssssdssSuccess(response.data));
      action.payload.navigate("/Recorddfdsdssssdss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRecorddfdsdssssdssFailure());
  }
}

function* updateRecorddfdsdssssdssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Recorddfdsdssssdss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRecorddfdsdssssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRecorddfdsdssssdssFailure());
  }
}

function* deleteRecorddfdsdssssdssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Recorddfdsdssssdss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteRecorddfdsdssssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteRecorddfdsdssssdssFailure());
  }
}

function* getRecorddfdsdssssdssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Recorddfdsdssssdss}`);

    if (response?.status === 200) {
      yield put(getRecorddfdsdssssdssSuccess(response.data));
    }
  } catch (error) {
    yield put(getRecorddfdsdssssdssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_RECORDDFDSDSSSSDSS, createRecorddfdsdssssdssCall);
  yield takeLatest(GET_RECORDDFDSDSSSSDSS, getRecorddfdsdssssdssCall);
  yield takeLatest(UPDATE_RECORDDFDSDSSSSDSS, updateRecorddfdsdssssdssCall);
  yield takeLatest(DELETE_RECORDDFDSDSSSSDSS, deleteRecorddfdsdssssdssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
