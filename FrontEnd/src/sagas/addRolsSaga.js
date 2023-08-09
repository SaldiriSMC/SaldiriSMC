import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_ROLE,
  GET_ROLE,
  DELETE_ROLE,
  UPDATE_ROLE
} from "../actions/AddRols/actionTypes";
import {
  getRollSuccess,
  getRollFailure,
  createRollSuccess,
  createRollFailure,
  deleteRollSuccess,
  deleteRollFailure,
  updateRollSuccess,
  updateRollFailure
} from "../actions/AddRols/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createRollsCall(action) {

  try {
    const response = yield call(postRequestWithTenat, action.payload.type == 'designation'? URls.designation : action.payload.type == 'department' ?  URls.department :  URls.status,action.payload.data);

    if (response?.status === 200) {
      yield takeLatest(GET_ROLE, getAllRollsCall);
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createRollSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createRollFailure());
  }
}

function* getAllRollsCall(action) {
  try {
    const response = yield call(getRequestWithTenant, action.payload.type == 'designation'? `${URls.designation}?limit=${action.payload.filter.pageSize}&page=${action.payload.filter.pageNumber}` : action.payload.type == 'department' ? `${URls.department}?limit=${action.payload.filter.pageSize}&page=${action.payload.filter.pageNumber}` :  `${URls.status}?Module_Id=${action.payload.id}&limit=${action.payload.filter.pageSize}&page=${action.payload.filter.pageNumber}`);

    if (response?.status === 200) {
      yield put(getRollSuccess(response.data));
    }
  } catch (error) {
    yield put(getRollFailure());
  }
}
function* updateRollCall(action) {

  try {
    const response = yield call(patchRequestWithTokenTenant,  action.payload.type == 'designation'? `${URls.designation}/${ action.payload.id}` : action.payload.type == 'department' ?  `${URls.department}/${ action.payload.id}` :  `${URls.status}/${ action.payload.id}`,action.payload.data);

    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateRollSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateRollFailure());
  }
}
function* deleteRollsCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, action.payload.type == 'designation'? `${URls.designation}/${ action.payload.id}` : action.payload.type == 'department' ?  `${URls.department}/${ action.payload.id}` :  `${URls.status}/${ action.payload.id}`);
  
    if (response?.status === 200) {
      yield put(deleteRollSuccess(response.data));
    }
  } catch (error) {
    yield put(deleteRollFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(ADD_ROLE, createRollsCall);
  yield takeLatest(GET_ROLE, getAllRollsCall);
  yield takeLatest(DELETE_ROLE, deleteRollsCall);
  yield takeLatest(UPDATE_ROLE, updateRollCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
