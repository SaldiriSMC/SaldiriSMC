import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_CARLIST,
  GET_CARLIST,
  UPDATE_CARLIST,
  DELETE_CARLIST
} from "../actions/carList/actionTypes";
import {
  createcarListSuccess,
  createcarListFailure,
  getcarListSuccess,
  getcarListFailure,
  updatecarListSuccess,
  updatecarListFailure,
  deletecarListSuccess,
  deletecarListFailure
} from "../actions/carList/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createcarListCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.carList, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createcarListSuccess(response.data));
      action.payload.navigate("/carList")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createcarListFailure());
  }
}

function* updatecarListCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.carList}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updatecarListSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updatecarListFailure());
  }
}

function* deletecarListCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.carList}/${action.payload.id}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deletecarListSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deletecarListFailure());
  }
}

function* getcarListCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.carList}?limit=10000&page=1`);

    if (response?.status === 200) {
      yield put(getcarListSuccess(response.data));
    }
  } catch (error) {
    yield put(getcarListFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_CARLIST, createcarListCall);
  yield takeLatest(GET_CARLIST, getcarListCall);
  yield takeLatest(UPDATE_CARLIST, updatecarListCall);
  yield takeLatest(DELETE_CARLIST, deletecarListCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
