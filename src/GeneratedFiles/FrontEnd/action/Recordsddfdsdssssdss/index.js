import {
    CREATE_RECORDSDDFDSDSSSSDSS,
    CREATE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    CREATE_RECORDSDDFDSDSSSSDSS_FAILURE,
    GET_RECORDSDDFDSDSSSSDSS,
    GET_RECORDSDDFDSDSSSSDSS_SUCCESS,
    GET_RECORDSDDFDSDSSSSDSS_FAILURE,
    UPDATE_RECORDSDDFDSDSSSSDSS,
    UPDATE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    UPDATE_RECORDSDDFDSDSSSSDSS_FAILURE,
    DELETE_RECORDSDDFDSDSSSSDSS,
    DELETE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    DELETE_RECORDSDDFDSDSSSSDSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createRecordsddfdsdssssdss = (data) => ({
    type: CREATE_RECORDSDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const createRecordsddfdsdssssdssSuccess = (data) => ({
    type: CREATE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const createRecordsddfdsdssssdssFailure = () => ({
    type: CREATE_RECORDSDDFDSDSSSSDSS_FAILURE,
  });

  export const getRecordsddfdsdssssdss = (data) => ({
    type: GET_RECORDSDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const getRecordsddfdsdssssdssSuccess = (data) => ({
    type: GET_RECORDSDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const getRecordsddfdsdssssdssFailure = () => ({
    type: GET_RECORDSDDFDSDSSSSDSS_FAILURE,
  });

  export const updateRecordsddfdsdssssdss = (data) => ({
    type: UPDATE_RECORDSDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const updateRecordsddfdsdssssdssSuccess = (data) => ({
    type: UPDATE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const updateRecordsddfdsdssssdssFailure = () => ({
    type: UPDATE_RECORDSDDFDSDSSSSDSS_FAILURE,
  });

  export const deleteRecordsddfdsdssssdss = (data) => ({
    type: DELETE_RECORDSDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const deleteRecordsddfdsdssssdssSuccess = (data) => ({
    type: DELETE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const deleteRecordsddfdsdssssdssFailure = () => ({
    type: DELETE_RECORDSDDFDSDSSSSDSS_FAILURE,
  });
  