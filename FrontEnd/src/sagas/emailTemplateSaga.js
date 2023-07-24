import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_EMAIL_TEMPLATE,
  GET_EMAIL_TEMPLATE
} from "../actions/EmailTemplate/actionTypes";
import {
  createTemplateSuccess,
  createTemplateFailure,
  getTemplateSuccess,
  getTemplateFailure
} from "../actions/EmailTemplate/index";
import { pushNotification, } from "../utils/notifications";
import {
  postRequestWithTenat,
  getRequestWithTenant
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
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
