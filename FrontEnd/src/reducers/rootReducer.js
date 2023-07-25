import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import  attendanceReducer  from "./attendanceReducer";
import emailTemplateReducer from "./emailTemplateReducer"
import  loderReducer  from "./loder";
import  tenetRolls  from "./tenetRolls";

const appReducer = combineReducers({
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  attendance: attendanceReducer,
  emailTemplate: emailTemplateReducer,
  loderReducer: loderReducer,
  tenetRolls: tenetRolls,
});

const rootReducer = (state, action) => {

  if (action.type === "RESET_ALL_DATA") {
    state = {
      auth: state.auth,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
