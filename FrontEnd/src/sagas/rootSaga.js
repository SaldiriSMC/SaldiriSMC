import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import resetPasswordSaga from "./resetPasswordSaga"
import courseSaga from "./courseSaga"
export default function* rootSaga() {
  yield all([authSagas(), resetPasswordSaga(), courseSaga()]);  
}
