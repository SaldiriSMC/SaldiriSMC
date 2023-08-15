import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_RECORDDFSSSDSS,
  GET_RECORDDFSSSDSS,
  UPDATE_RECORDDFSSSDSS,
  DELETE_RECORDDFSSSDSS
} from "../actions/Recorddfsssdss/actionTypes";
import {
  createRecorddfsssdssSuccess,
  createRecorddfsssdssFailure,
  getRecorddfsssdssSuccess,
  getRecorddfsssdssFailure,
  updateRecorddfsssdssSuccess,
  updateRecorddfsssdssFailure,
  deleteRecorddfsssdssSuccess,
  deleteRecorddfsssdssFailure
} from "../actions/Recorddfsssdss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRecorddfsssdssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Recorddfsssdss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRecorddfsssdssSuccess(response.data));
      action.payload.navigate("/Recorddfsssdss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRecorddfsssdssFailure());
  }
}

function* updateRecorddfsssdssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Recorddfsssdss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRecorddfsssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRecorddfsssdssFailure());
  }
}

function* deleteRecorddfsssdssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Recorddfsssdss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteRecorddfsssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteRecorddfsssdssFailure());
  }
}

function* getRecorddfsssdssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Recorddfsssdss}`);

    if (response?.status === 200) {
      yield put(getRecorddfsssdssSuccess(response.data));
    }
  } catch (error) {
    yield put(getRecorddfsssdssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_RECORDDFSSSDSS, createRecorddfsssdssCall);
  yield takeLatest(GET_RECORDDFSSSDSS, getRecorddfsssdssCall);
  yield takeLatest(UPDATE_RECORDDFSSSDSS, updateRecorddfsssdssCall);
  yield takeLatest(DELETE_RECORDDFSSSDSS, deleteRecorddfsssdssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
