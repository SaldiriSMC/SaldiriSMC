import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_EMAIL_TEMPLATE,
  GET_EMAIL_TEMPLATE,
  UPDATE_EMAIL_TEMPLATE,
  DELETE_EMAIL_TEMPLATE
} from "../actions/EmailTemplate/actionTypes";
import {
  createTemplateSuccess,
  createTemplateFailure,
  getTemplateSuccess,
  getTemplateFailure,
  updateTemplateSuccess,
  updateTemplateFailure,
  deleteTemplateSuccess,
  deleteTemplateFailure
} from "../actions/EmailTemplate/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant,
  patchRequestWithTokenTenant,
  deleteRequestWithTokenTenant
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createEmailTemplateCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.emailTemplate, {body:action.payload.body, subject:action.payload.subject});
    console.log(response);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(createTemplateSuccess(response.data));
      action.payload.navigate("/emailTemplate")
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(createTemplateFailure());
  }
}

function* updateEmailTemplateCall(action) {
  try {
    const response = yield call(patchRequestWithTokenTenant, `${URls.emailTemplate}/${action.payload.itemId}`, {body:action.payload.body, subject:action.payload.subject});
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(updateTemplateSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(updateTemplateFailure());
  }
}

function* deleteEmailTemplateCall(action) {
  try {
    const response = yield call(deleteRequestWithTokenTenant, `${URls.emailTemplate}/${action.payload.itemId}`);
    console.log(response);
    if (response?.status === 200) {
      pushNotification(
        `${response?.data.message}`,
        "success",
        "TOP_CENTER",
        1000
      );
      yield put(deleteTemplateSuccess(response.data));
    } else {
      pushNotification(`${response?.data?.message}`, "");
    }
  } catch (error) {
    yield put(deleteTemplateFailure());
  }
}

function* getEmailTemplateCall(action) {
  try {
    const response = yield call(getRequestWithTenant, URls.emailTemplate);
    console.log(response);
    if (response?.status === 200) {
      yield put(getTemplateSuccess(response.data));
    }
  } catch (error) {
    yield put(getTemplateFailure());
  }
}


function* watchGetRequest() {
  yield takeLatest(CREATE_EMAIL_TEMPLATE, createEmailTemplateCall);
  yield takeLatest(GET_EMAIL_TEMPLATE, getEmailTemplateCall);
  yield takeLatest(UPDATE_EMAIL_TEMPLATE, updateEmailTemplateCall);
  yield takeLatest(DELETE_EMAIL_TEMPLATE, deleteEmailTemplateCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
