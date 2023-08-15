import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_FARARI,
  GET_FARARI,
  UPDATE_FARARI,
  DELETE_FARARI
} from "../actions/Farari/actionTypes";
import {
  createFarariSuccess,
  createFarariFailure,
  getFarariSuccess,
  getFarariFailure,
  updateFarariSuccess,
  updateFarariFailure,
  deleteFarariSuccess,
  deleteFarariFailure
} from "../actions/Farari/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createFarariCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Farari, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createFarariSuccess(response.data));
      action.payload.navigate("/Farari")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createFarariFailure());
  }
}

function* updateFarariCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Farari}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateFarariSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateFarariFailure());
  }
}

function* deleteFarariCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Farari}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteFarariSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteFarariFailure());
  }
}

function* getFarariCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Farari}`);

    if (response?.status === 200) {
      yield put(getFarariSuccess(response.data));
    }
  } catch (error) {
    yield put(getFarariFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_FARARI, createFarariCall);
  yield takeLatest(GET_FARARI, getFarariCall);
  yield takeLatest(UPDATE_FARARI, updateFarariCall);
  yield takeLatest(DELETE_FARARI, deleteFarariCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
