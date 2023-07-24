import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import  attendanceReducer  from "./attendanceReducer";

const appReducer = combineReducers({
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  attendance: attendanceReducer,
});

const rootReducer = (state, action) => {
  // console.log("RESET_ALL_DATA action", action)
  if (action.type === "RESET_ALL_DATA") {
    state = {
      auth: state.auth,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
