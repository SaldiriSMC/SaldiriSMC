import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_USERLIST,
  GET_USERLIST,
  UPDATE_USERLIST,
  DELETE_USERLIST
} from "../actions/UserList/actionTypes";
import {
  createUserListSuccess,
  createUserListFailure,
  getUserListSuccess,
  getUserListFailure,
  updateUserListSuccess,
  updateUserListFailure,
  deleteUserListSuccess,
  deleteUserListFailure
} from "../actions/UserList/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createUserListCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.UserList, {body:action.payload.body, subject:action.payload.subject});

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createUserListSuccess(response.data));
      action.payload.navigate("/UserList")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createUserListFailure());
  }
}

function* updateUserListCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.UserList}/${action.payload.itemId}`, {body:action.payload.body, subject:action.payload.subject});
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateUserListSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateUserListFailure());
  }
}

function* deleteUserListCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.UserList}/${action.payload.itemId}`);
  
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteUserListSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteUserListFailure());
  }
}

function* getUserListCall(action) {
  try {
    const response = yield call(getRequestWithTenant, `${URls.UserList}`);

    if (response?.status === 200) {
      yield put(getUserListSuccess(response.data));
    }
  } catch (error) {
    yield put(getUserListFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_USERLIST, createUserListCall);
  yield takeLatest(GET_USERLIST, getUserListCall);
  yield takeLatest(UPDATE_USERLIST, updateUserListCall);
  yield takeLatest(DELETE_USERLIST, deleteUserListCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
