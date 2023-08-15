import {
    CREATE_RECORDDFSSSDSS,
    CREATE_RECORDDFSSSDSS_SUCCESS,
    CREATE_RECORDDFSSSDSS_FAILURE,
    GET_RECORDDFSSSDSS,
    GET_RECORDDFSSSDSS_SUCCESS,
    GET_RECORDDFSSSDSS_FAILURE,
    UPDATE_RECORDDFSSSDSS,
    UPDATE_RECORDDFSSSDSS_SUCCESS,
    UPDATE_RECORDDFSSSDSS_FAILURE,
    DELETE_RECORDDFSSSDSS,
    DELETE_RECORDDFSSSDSS_SUCCESS,
    DELETE_RECORDDFSSSDSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createRecorddfsssdss = (data) => ({
    type: CREATE_RECORDDFSSSDSS,
    payload: data,
  });
  
  export const createRecorddfsssdssSuccess = (data) => ({
    type: CREATE_RECORDDFSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const createRecorddfsssdssFailure = () => ({
    type: CREATE_RECORDDFSSSDSS_FAILURE,
  });

  export const getRecorddfsssdss = (data) => ({
    type: GET_RECORDDFSSSDSS,
    payload: data,
  });
  
  export const getRecorddfsssdssSuccess = (data) => ({
    type: GET_RECORDDFSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const getRecorddfsssdssFailure = () => ({
    type: GET_RECORDDFSSSDSS_FAILURE,
  });

  export const updateRecorddfsssdss = (data) => ({
    type: UPDATE_RECORDDFSSSDSS,
    payload: data,
  });
  
  export const updateRecorddfsssdssSuccess = (data) => ({
    type: UPDATE_RECORDDFSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const updateRecorddfsssdssFailure = () => ({
    type: UPDATE_RECORDDFSSSDSS_FAILURE,
  });

  export const deleteRecorddfsssdss = (data) => ({
    type: DELETE_RECORDDFSSSDSS,
    payload: data,
  });
  
  export const deleteRecorddfsssdssSuccess = (data) => ({
    type: DELETE_RECORDDFSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const deleteRecorddfsssdssFailure = () => ({
    type: DELETE_RECORDDFSSSDSS_FAILURE,
  });
  