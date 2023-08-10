import {
    CREATE_USERLIST,
    CREATE_USERLIST_SUCCESS,
    CREATE_USERLIST_FAILURE,
    GET_USERLIST,
    GET_USERLIST_SUCCESS,
    GET_USERLIST_FAILURE,
    UPDATE_USERLIST,
    UPDATE_USERLIST_SUCCESS,
    UPDATE_USERLIST_FAILURE,
    DELETE_USERLIST,
    DELETE_USERLIST_SUCCESS,
    DELETE_USERLIST_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createUserList = (data) => ({
    type: CREATE_USERLIST,
    payload: data,
  });
  
  export const createUserListSuccess = (data) => ({
    type: CREATE_USERLIST_SUCCESS,
    payload: data,
  });
  
  export const createUserListFailure = () => ({
    type: CREATE_USERLIST_FAILURE,
  });

  export const getUserList = (data) => ({
    type: GET_USERLIST,
    payload: data,
  });
  
  export const getUserListSuccess = (data) => ({
    type: GET_USERLIST_SUCCESS,
    payload: data,
  });
  
  export const getUserListFailure = () => ({
    type: GET_USERLIST_FAILURE,
  });

  export const updateUserList = (data) => ({
    type: UPDATE_USERLIST,
    payload: data,
  });
  
  export const updateUserListSuccess = (data) => ({
    type: UPDATE_USERLIST_SUCCESS,
    payload: data,
  });
  
  export const updateUserListFailure = () => ({
    type: UPDATE_USERLIST_FAILURE,
  });

  export const deleteUserList = (data) => ({
    type: DELETE_USERLIST,
    payload: data,
  });
  
  export const deleteUserListSuccess = (data) => ({
    type: DELETE_USERLIST_SUCCESS,
    payload: data,
  });
  
  export const deleteUserListFailure = () => ({
    type: DELETE_USERLIST_FAILURE,
  });
  