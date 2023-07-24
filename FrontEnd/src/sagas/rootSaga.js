import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import resetPasswordSaga from "./resetPasswordSaga"
import attendanceSaga from "./attendanceSaga"
<<<<<<< HEAD
export default function* rootSaga() {
  yield all([authSagas(), resetPasswordSaga(), attendanceSaga()]);  
=======
import emailTemplateSaga from "./emailTemplateSaga"
import addRollSaga from "./addRolsSaga"
export default function* rootSaga() {
<<<<<<< HEAD
  yield all([authSagas(), resetPasswordSaga(), attendanceSaga(), emailTemplateSaga(),addRollSaga()]);  
=======
  yield all([authSagas(), resetPasswordSaga(), attendanceSaga(), emailTemplateSaga()]);  
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
>>>>>>> 3c3e376eacd197ecb850d5ac371bfe5ae00792ba
}
