import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_EMAIL_TEMPLATE,
} from "../actions/EmailTemplate/actionTypes";
import {
  createTemplateSuccess,
  createTemplateFailure,
} from "../actions/EmailTemplate/index";
import { pushNotification } from "../utils/notifications";
import {
  postRequestWithTenat,
} from "./request";
import URls from "../constants/urls";

// //course category generator function
function* createEmailTemplateCall(action) {
  try {
    const response = yield call(postRequestWithTenat, URls.emailTemplate);
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
function* watchGetRequest() {
  yield takeLatest(CREATE_EMAIL_TEMPLATE, createEmailTemplateCall);
}
export default function* sagas() {
  yield all([watchGetRequest()]);
}
