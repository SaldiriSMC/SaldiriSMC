import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_#tableTitle,
  GET_#tableTitle,
  UPDATE_#tableTitle,
  DELETE_#tableTitle
} from "../actions/#tableName/actionTypes";
import {
  create#tableNameSuccess,
  create#tableNameFailure,
  get#tableNameSuccess,
  get#tableNameFailure,
  update#tableNameSuccess,
  update#tableNameFailure,
  delete#tableNameSuccess,
  delete#tableNameFailure
} from "../actions/#tableName/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* create#tableNameCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.#tableName, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(create#tableNameSuccess(response.data));
      action.payload.navigate("/#tableName")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(create#tableNameFailure());
  }
}

function* update#tableNameCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.#tableName}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(update#tableNameSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(update#tableNameFailure());
  }
}

function* delete#tableNameCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.#tableName}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(delete#tableNameSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(delete#tableNameFailure());
  }
}

function* get#tableNameCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.#tableName}`);

    if (response?.status === 200) {
      yield put(get#tableNameSuccess(response.data));
    }
  } catch (error) {
    yield put(get#tableNameFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_#tableTitle, create#tableNameCall);
  yield takeLatest(GET_#tableTitle, get#tableNameCall);
  yield takeLatest(UPDATE_#tableTitle, update#tableNameCall);
  yield takeLatest(DELETE_#tableTitle, delete#tableNameCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
