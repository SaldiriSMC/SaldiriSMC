import {
  LOGIN,
  SIGNUP,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  LOGOUT,
} from "../actions/Auth/actionTypes";
// import { useNavigate } from 'react-router-dom';
const initialState = {
  getListLoading: false,
  data: null,
  dataSignUp: null,
};

const getLogin = (state, action) => ({
  ...state,
  getListLoading: true,
});

const getLoginSuccess = (state, action) => {

  return {
    ...state,
    getListLoading: false,
    data: action.payload,
  };
};

const getLoginFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  data: [],
});

const getSignUp = (state, action) => ({
  ...state,
  getListLoading: true,
});

const getSignUpSuccess = (state, action) => {
  return {
    ...state,
    getListLoading: false,
    dataSignUp: action.payload,
  };
};

const getSignUpFailed = (state, action) => ({
  ...state,
  getListLoading: false,
  dataSignUp: [],
});

const logOut= (state, action) => ({
  ...state,
  getListLoading: false,
  data: null,
  dataSignUp: null,
});



const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return getLogin(state, action);
    case LOGIN_SUCCESS:
      return getLoginSuccess(state, action);
    case LOGIN_FAILURE:
      return getLoginFailed(state, action);
    case SIGNUP:
      return getSignUp(state, action);
    case SIGNUP_SUCCESS:
      return getSignUpSuccess(state, action);
    case SIGNUP_FAILURE:
      return getSignUpFailed(state, action);
    case LOGOUT:
      return logOut(state, action);
    default:
      return state;
  }
};

export default authReducer;
