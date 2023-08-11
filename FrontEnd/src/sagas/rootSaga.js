import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import resetPasswordSaga from "./resetPasswordSaga"
import carList from "./carListSaga";
import attendanceSaga from "./attendanceSaga"
import emailTemplateSaga from "./emailTemplateSaga"
import addRollSaga from "./addRolsSaga"
import UserList from "./UserListSaga";

export default function* rootSaga() {
  yield all([UserList(), authSagas(), resetPasswordSaga(), carList(), attendanceSaga(), emailTemplateSaga(),addRollSaga()]);  
}
