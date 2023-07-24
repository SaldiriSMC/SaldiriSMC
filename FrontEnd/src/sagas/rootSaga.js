import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import resetPasswordSaga from "./resetPasswordSaga"
import attendanceSaga from "./attendanceSaga"
<<<<<<< HEAD
export default function* rootSaga() {
  yield all([authSagas(), resetPasswordSaga(), attendanceSaga()]);  
=======
import emailTemplateSaga from "./emailTemplateSaga"
export default function* rootSaga() {
  yield all([authSagas(), resetPasswordSaga(), attendanceSaga(), emailTemplateSaga()]);  
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
}
