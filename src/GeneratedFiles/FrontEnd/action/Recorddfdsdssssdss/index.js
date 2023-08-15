import {
    CREATE_RECORDDFDSDSSSSDSS,
    CREATE_RECORDDFDSDSSSSDSS_SUCCESS,
    CREATE_RECORDDFDSDSSSSDSS_FAILURE,
    GET_RECORDDFDSDSSSSDSS,
    GET_RECORDDFDSDSSSSDSS_SUCCESS,
    GET_RECORDDFDSDSSSSDSS_FAILURE,
    UPDATE_RECORDDFDSDSSSSDSS,
    UPDATE_RECORDDFDSDSSSSDSS_SUCCESS,
    UPDATE_RECORDDFDSDSSSSDSS_FAILURE,
    DELETE_RECORDDFDSDSSSSDSS,
    DELETE_RECORDDFDSDSSSSDSS_SUCCESS,
    DELETE_RECORDDFDSDSSSSDSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createRecorddfdsdssssdss = (data) => ({
    type: CREATE_RECORDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const createRecorddfdsdssssdssSuccess = (data) => ({
    type: CREATE_RECORDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const createRecorddfdsdssssdssFailure = () => ({
    type: CREATE_RECORDDFDSDSSSSDSS_FAILURE,
  });

  export const getRecorddfdsdssssdss = (data) => ({
    type: GET_RECORDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const getRecorddfdsdssssdssSuccess = (data) => ({
    type: GET_RECORDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const getRecorddfdsdssssdssFailure = () => ({
    type: GET_RECORDDFDSDSSSSDSS_FAILURE,
  });

  export const updateRecorddfdsdssssdss = (data) => ({
    type: UPDATE_RECORDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const updateRecorddfdsdssssdssSuccess = (data) => ({
    type: UPDATE_RECORDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const updateRecorddfdsdssssdssFailure = () => ({
    type: UPDATE_RECORDDFDSDSSSSDSS_FAILURE,
  });

  export const deleteRecorddfdsdssssdss = (data) => ({
    type: DELETE_RECORDDFDSDSSSSDSS,
    payload: data,
  });
  
  export const deleteRecorddfdsdssssdssSuccess = (data) => ({
    type: DELETE_RECORDDFDSDSSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const deleteRecorddfdsdssssdssFailure = () => ({
    type: DELETE_RECORDDFDSDSSSSDSS_FAILURE,
  });
  