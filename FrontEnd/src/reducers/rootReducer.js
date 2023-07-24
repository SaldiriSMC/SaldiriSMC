import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import  attendanceReducer  from "./attendanceReducer";
<<<<<<< HEAD
=======
import emailTemplateReducer from "./emailTemplateReducer"
import  loderReducer  from "./loder";
<<<<<<< HEAD
import  tenetRolls  from "./tenetRolls";
=======
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
>>>>>>> 3c3e376eacd197ecb850d5ac371bfe5ae00792ba

const appReducer = combineReducers({
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  attendance: attendanceReducer,
<<<<<<< HEAD
=======
  emailTemplate: emailTemplateReducer,
  loderReducer: loderReducer,
<<<<<<< HEAD
  tenetRolls: tenetRolls,
=======
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
>>>>>>> 3c3e376eacd197ecb850d5ac371bfe5ae00792ba
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
