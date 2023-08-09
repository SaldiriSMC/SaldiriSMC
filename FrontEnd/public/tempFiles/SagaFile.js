import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_#tableTitle,
  GET_#tableTitle,
  UPDATE_#tableTitle,
  DELETE_#tableTitle
} from "../actions/Email#tableName/actionTypes";
import {
  create#tableNameSuccess,
  create#tableNameFailure,
  get#tableNameSuccess,
  get#tableNameFailure,
  update#tableNameSuccess,
  update#tableNameFailure,
  delete#tableNameSuccess,
  delete#tableNameFailure
} from "../actions/Email#tableName/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createEmail#tableNameCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.email#tableName, {body:action.payload.body, subject:action.payload.subject});

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(create#tableNameSuccess(response.data));
      action.payload.navigate("/email#tableName")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(create#tableNameFailure());
  }
}

function* updateEmail#tableNameCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.email#tableName}/${action.payload.itemId}`, {body:action.payload.body, subject:action.payload.subject});
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

function* deleteEmail#tableNameCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.email#tableName}/${action.payload.itemId}`);
  
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

function* getEmail#tableNameCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.email#tableName}?limit=${action.payload.pageSize}&page=${action.payload.pageNumber}`);

    if (response?.status === 200) {
      yield put(get#tableNameSuccess(response.data));
    }
  } catch (error) {
    yield put(get#tableNameFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_#tableTitle, createEmail#tableNameCall);
  yield takeLatest(GET_#tableTitle, getEmail#tableNameCall);
  yield takeLatest(UPDATE_#tableTitle, updateEmail#tableNameCall);
  yield takeLatest(DELETE_#tableTitle, deleteEmail#tableNameCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
