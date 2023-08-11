import {
    CREATE_#tableTitle,
    CREATE_#tableTitle_SUCCESS,
    CREATE_#tableTitle_FAILURE,
    GET_#tableTitle,
    GET_#tableTitle_SUCCESS,
    GET_#tableTitle_FAILURE,
    UPDATE_#tableTitle,
    UPDATE_#tableTitle_SUCCESS,
    UPDATE_#tableTitle_FAILURE,
    DELETE_#tableTitle,
    DELETE_#tableTitle_SUCCESS,
    DELETE_#tableTitle_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const create#tableName = (data) => ({
    type: CREATE_#tableTitle,
    payload: data,
  });
  
  export const create#tableNameSuccess = (data) => ({
    type: CREATE_#tableTitle_SUCCESS,
    payload: data,
  });
  
  export const create#tableNameFailure = () => ({
    type: CREATE_#tableTitle_FAILURE,
  });

  export const get#tableName = (data) => ({
    type: GET_#tableTitle,
    payload: data,
  });
  
  export const get#tableNameSuccess = (data) => ({
    type: GET_#tableTitle_SUCCESS,
    payload: data,
  });
  
  export const get#tableNameFailure = () => ({
    type: GET_#tableTitle_FAILURE,
  });

  export const update#tableName = (data) => ({
    type: UPDATE_#tableTitle,
    payload: data,
  });
  
  export const update#tableNameSuccess = (data) => ({
    type: UPDATE_#tableTitle_SUCCESS,
    payload: data,
  });
  
  export const update#tableNameFailure = () => ({
    type: UPDATE_#tableTitle_FAILURE,
  });

  export const delete#tableName = (data) => ({
    type: DELETE_#tableTitle,
    payload: data,
  });
  
  export const delete#tableNameSuccess = (data) => ({
    type: DELETE_#tableTitle_SUCCESS,
    payload: data,
  });
  
  export const delete#tableNameFailure = () => ({
    type: DELETE_#tableTitle_FAILURE,
  });
  