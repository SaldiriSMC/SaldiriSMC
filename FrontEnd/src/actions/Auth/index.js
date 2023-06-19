import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP,
  LOGOUT,
} from "./actionTypes";

// Signin actions function
export const logIn = (data) => ({
  type: LOGIN,
  payload: data,
});

export const logInSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const logInFailure = () => ({
  type: LOGIN_FAILURE,
});

// Signup actions function
export const signUp = (data) => ({
  type: SIGNUP,
  payload: data,
});

export const signUpSuccess = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signUpFailure = () => ({
  type: SIGNUP_FAILURE,
});

 //Logout action function
export const logout = () => ({
  type: LOGOUT,
});
