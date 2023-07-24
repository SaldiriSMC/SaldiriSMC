import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import  attendanceReducer  from "./attendanceReducer";
<<<<<<< HEAD
=======
import emailTemplateReducer from "./emailTemplateReducer"
import  loderReducer  from "./loder";
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630

const appReducer = combineReducers({
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  attendance: attendanceReducer,
<<<<<<< HEAD
=======
  emailTemplate: emailTemplateReducer,
  loderReducer: loderReducer,
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
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
