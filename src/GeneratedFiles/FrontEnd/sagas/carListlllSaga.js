import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_CARLISTLLL,
  GET_CARLISTLLL,
  UPDATE_CARLISTLLL,
  DELETE_CARLISTLLL
} from "../actions/carListlll/actionTypes";
import {
  createcarListlllSuccess,
  createcarListlllFailure,
  getcarListlllSuccess,
  getcarListlllFailure,
  updatecarListlllSuccess,
  updatecarListlllFailure,
  deletecarListlllSuccess,
  deletecarListlllFailure
} from "../actions/carListlll/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createcarListlllCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.carListlll, action.payload);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createcarListlllSuccess(response.data));
      action.payload.navigate("/carListlll")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createcarListlllFailure());
  }
}

function* updatecarListlllCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.carListlll}/${action.payload.itemId}`);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updatecarListlllSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updatecarListlllFailure());
  }
}

function* deletecarListlllCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.carListlll}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deletecarListlllSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deletecarListlllFailure());
  }
}

function* getcarListlllCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.carListlll}`);

    if (response?.status === 200) {
      yield put(getcarListlllSuccess(response.data));
    }
  } catch (error) {
    yield put(getcarListlllFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_CARLISTLLL, createcarListlllCall);
  yield takeLatest(GET_CARLISTLLL, getcarListlllCall);
  yield takeLatest(UPDATE_CARLISTLLL, updatecarListlllCall);
  yield takeLatest(DELETE_CARLISTLLL, deletecarListlllCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
