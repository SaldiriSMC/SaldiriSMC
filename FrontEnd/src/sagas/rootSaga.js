import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import resetPasswordSaga from "./resetPasswordSaga"
import attendanceSaga from "./attendanceSaga"
import emailTemplateSaga from "./emailTemplateSaga"
import addRollSaga from "./addRolsSaga"
export default function* rootSaga() {
  yield all([authSagas(), resetPasswordSaga(), attendanceSaga(), emailTemplateSaga(),addRollSaga()]);  
}
