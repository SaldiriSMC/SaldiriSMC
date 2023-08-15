import {
    CREATE_RECORDSSSS,
    CREATE_RECORDSSSS_SUCCESS,
    CREATE_RECORDSSSS_FAILURE,
    GET_RECORDSSSS,
    GET_RECORDSSSS_SUCCESS,
    GET_RECORDSSSS_FAILURE,
    UPDATE_RECORDSSSS,
    UPDATE_RECORDSSSS_SUCCESS,
    UPDATE_RECORDSSSS_FAILURE,
    DELETE_RECORDSSSS,
    DELETE_RECORDSSSS_SUCCESS,
    DELETE_RECORDSSSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createRecordssss = (data) => ({
    type: CREATE_RECORDSSSS,
    payload: data,
  });
  
  export const createRecordssssSuccess = (data) => ({
    type: CREATE_RECORDSSSS_SUCCESS,
    payload: data,
  });
  
  export const createRecordssssFailure = () => ({
    type: CREATE_RECORDSSSS_FAILURE,
  });

  export const getRecordssss = (data) => ({
    type: GET_RECORDSSSS,
    payload: data,
  });
  
  export const getRecordssssSuccess = (data) => ({
    type: GET_RECORDSSSS_SUCCESS,
    payload: data,
  });
  
  export const getRecordssssFailure = () => ({
    type: GET_RECORDSSSS_FAILURE,
  });

  export const updateRecordssss = (data) => ({
    type: UPDATE_RECORDSSSS,
    payload: data,
  });
  
  export const updateRecordssssSuccess = (data) => ({
    type: UPDATE_RECORDSSSS_SUCCESS,
    payload: data,
  });
  
  export const updateRecordssssFailure = () => ({
    type: UPDATE_RECORDSSSS_FAILURE,
  });

  export const deleteRecordssss = (data) => ({
    type: DELETE_RECORDSSSS,
    payload: data,
  });
  
  export const deleteRecordssssSuccess = (data) => ({
    type: DELETE_RECORDSSSS_SUCCESS,
    payload: data,
  });
  
  export const deleteRecordssssFailure = () => ({
    type: DELETE_RECORDSSSS_FAILURE,
  });
  