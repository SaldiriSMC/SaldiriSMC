import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_RECORDSS,
  GET_RECORDSS,
  UPDATE_RECORDSS,
  DELETE_RECORDSS
} from "../actions/Recordss/actionTypes";
import {
  createRecordssSuccess,
  createRecordssFailure,
  getRecordssSuccess,
  getRecordssFailure,
  updateRecordssSuccess,
  updateRecordssFailure,
  deleteRecordssSuccess,
  deleteRecordssFailure
} from "../actions/Recordss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRecordssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Recordss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRecordssSuccess(response.data));
      action.payload.navigate("/Recordss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRecordssFailure());
  }
}

function* updateRecordssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Recordss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRecordssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRecordssFailure());
  }
}

function* deleteRecordssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Recordss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteRecordssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteRecordssFailure());
  }
}

function* getRecordssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Recordss}`);

    if (response?.status === 200) {
      yield put(getRecordssSuccess(response.data));
    }
  } catch (error) {
    yield put(getRecordssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_RECORDSS, createRecordssCall);
  yield takeLatest(GET_RECORDSS, getRecordssCall);
  yield takeLatest(UPDATE_RECORDSS, updateRecordssCall);
  yield takeLatest(DELETE_RECORDSS, deleteRecordssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
