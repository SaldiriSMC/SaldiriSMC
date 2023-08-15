import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_FARARIES,
  GET_FARARIES,
  UPDATE_FARARIES,
  DELETE_FARARIES
} from "../actions/Fararies/actionTypes";
import {
  createFarariesSuccess,
  createFarariesFailure,
  getFarariesSuccess,
  getFarariesFailure,
  updateFarariesSuccess,
  updateFarariesFailure,
  deleteFarariesSuccess,
  deleteFarariesFailure
} from "../actions/Fararies/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createFarariesCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.Fararies, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createFarariesSuccess(response.data));
      action.payload.navigate("/Fararies")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createFarariesFailure());
  }
}

function* updateFarariesCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.Fararies}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateFarariesSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateFarariesFailure());
  }
}

function* deleteFarariesCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.Fararies}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteFarariesSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteFarariesFailure());
  }
}

function* getFarariesCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.Fararies}`);

    if (response?.status === 200) {
      yield put(getFarariesSuccess(response.data));
    }
  } catch (error) {
    yield put(getFarariesFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_FARARIES, createFarariesCall);
  yield takeLatest(GET_FARARIES, getFarariesCall);
  yield takeLatest(UPDATE_FARARIES, updateFarariesCall);
  yield takeLatest(DELETE_FARARIES, deleteFarariesCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
