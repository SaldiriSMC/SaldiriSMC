import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_SSSS,
  GET_SSSS,
  UPDATE_SSSS,
  DELETE_SSSS
} from "../actions/ssss/actionTypes";
import {
  createssssSuccess,
  createssssFailure,
  getssssSuccess,
  getssssFailure,
  updatessssSuccess,
  updatessssFailure,
  deletessssSuccess,
  deletessssFailure
} from "../actions/ssss/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createssssCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.ssss, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createssssSuccess(response.data));
      action.payload.navigate("/ssss")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createssssFailure());
  }
}

function* updatessssCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.ssss}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updatessssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updatessssFailure());
  }
}

function* deletessssCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.ssss}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deletessssSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deletessssFailure());
  }
}

function* getssssCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.ssss}`);

    if (response?.status === 200) {
      yield put(getssssSuccess(response.data));
    }
  } catch (error) {
    yield put(getssssFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_SSSS, createssssCall);
  yield takeLatest(GET_SSSS, getssssCall);
  yield takeLatest(UPDATE_SSSS, updatessssCall);
  yield takeLatest(DELETE_SSSS, deletessssCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
