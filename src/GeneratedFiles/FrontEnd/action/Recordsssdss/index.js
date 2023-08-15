import {
    CREATE_RECORDSSSDSS,
    CREATE_RECORDSSSDSS_SUCCESS,
    CREATE_RECORDSSSDSS_FAILURE,
    GET_RECORDSSSDSS,
    GET_RECORDSSSDSS_SUCCESS,
    GET_RECORDSSSDSS_FAILURE,
    UPDATE_RECORDSSSDSS,
    UPDATE_RECORDSSSDSS_SUCCESS,
    UPDATE_RECORDSSSDSS_FAILURE,
    DELETE_RECORDSSSDSS,
    DELETE_RECORDSSSDSS_SUCCESS,
    DELETE_RECORDSSSDSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createRecordsssdss = (data) => ({
    type: CREATE_RECORDSSSDSS,
    payload: data,
  });
  
  export const createRecordsssdssSuccess = (data) => ({
    type: CREATE_RECORDSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const createRecordsssdssFailure = () => ({
    type: CREATE_RECORDSSSDSS_FAILURE,
  });

  export const getRecordsssdss = (data) => ({
    type: GET_RECORDSSSDSS,
    payload: data,
  });
  
  export const getRecordsssdssSuccess = (data) => ({
    type: GET_RECORDSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const getRecordsssdssFailure = () => ({
    type: GET_RECORDSSSDSS_FAILURE,
  });

  export const updateRecordsssdss = (data) => ({
    type: UPDATE_RECORDSSSDSS,
    payload: data,
  });
  
  export const updateRecordsssdssSuccess = (data) => ({
    type: UPDATE_RECORDSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const updateRecordsssdssFailure = () => ({
    type: UPDATE_RECORDSSSDSS_FAILURE,
  });

  export const deleteRecordsssdss = (data) => ({
    type: DELETE_RECORDSSSDSS,
    payload: data,
  });
  
  export const deleteRecordsssdssSuccess = (data) => ({
    type: DELETE_RECORDSSSDSS_SUCCESS,
    payload: data,
  });
  
  export const deleteRecordsssdssFailure = () => ({
    type: DELETE_RECORDSSSDSS_FAILURE,
  });
  