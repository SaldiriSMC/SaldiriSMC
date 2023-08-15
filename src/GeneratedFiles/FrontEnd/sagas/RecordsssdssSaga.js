import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_RECORDSSSDSS,
  GET_RECORDSSSDSS,
  UPDATE_RECORDSSSDSS,
  DELETE_RECORDSSSDSS
} from "../actions/Recordsssdss/actionTypes";
import {
  createRecordsssdssSuccess,
  createRecordsssdssFailure,
  getRecordsssdssSuccess,
  getRecordsssdssFailure,
  updateRecordsssdssSuccess,
  updateRecordsssdssFailure,
  deleteRecordsssdssSuccess,
  deleteRecordsssdssFailure
} from "../actions/Recordsssdss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRecordsssdssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Recordsssdss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRecordsssdssSuccess(response.data));
      action.payload.navigate("/Recordsssdss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRecordsssdssFailure());
  }
}

function* updateRecordsssdssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Recordsssdss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRecordsssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRecordsssdssFailure());
  }
}

function* deleteRecordsssdssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Recordsssdss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteRecordsssdssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteRecordsssdssFailure());
  }
}

function* getRecordsssdssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Recordsssdss}`);

    if (response?.status === 200) {
      yield put(getRecordsssdssSuccess(response.data));
    }
  } catch (error) {
    yield put(getRecordsssdssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_RECORDSSSDSS, createRecordsssdssCall);
  yield takeLatest(GET_RECORDSSSDSS, getRecordsssdssCall);
  yield takeLatest(UPDATE_RECORDSSSDSS, updateRecordsssdssCall);
  yield takeLatest(DELETE_RECORDSSSDSS, deleteRecordsssdssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
