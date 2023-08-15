import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_RECORDSSSS,
  GET_RECORDSSSS,
  UPDATE_RECORDSSSS,
  DELETE_RECORDSSSS
} from "../actions/Recordssss/actionTypes";
import {
  createRecordssssSuccess,
  createRecordssssFailure,
  getRecordssssSuccess,
  getRecordssssFailure,
  updateRecordssssSuccess,
  updateRecordssssFailure,
  deleteRecordssssSuccess,
  deleteRecordssssFailure
} from "../actions/Recordssss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRecordssssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Recordssss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRecordssssSuccess(response.data));
      action.payload.navigate("/Recordssss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRecordssssFailure());
  }
}

function* updateRecordssssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Recordssss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRecordssssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRecordssssFailure());
  }
}

function* deleteRecordssssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Recordssss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteRecordssssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteRecordssssFailure());
  }
}

function* getRecordssssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Recordssss}`);

    if (response?.status === 200) {
      yield put(getRecordssssSuccess(response.data));
    }
  } catch (error) {
    yield put(getRecordssssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_RECORDSSSS, createRecordssssCall);
  yield takeLatest(GET_RECORDSSSS, getRecordssssCall);
  yield takeLatest(UPDATE_RECORDSSSS, updateRecordssssCall);
  yield takeLatest(DELETE_RECORDSSSS, deleteRecordssssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
