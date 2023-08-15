import {
    CREATE_RECORDSS,
    CREATE_RECORDSS_SUCCESS,
    CREATE_RECORDSS_FAILURE,
    GET_RECORDSS,
    GET_RECORDSS_SUCCESS,
    GET_RECORDSS_FAILURE,
    UPDATE_RECORDSS,
    UPDATE_RECORDSS_SUCCESS,
    UPDATE_RECORDSS_FAILURE,
    DELETE_RECORDSS,
    DELETE_RECORDSS_SUCCESS,
    DELETE_RECORDSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createRecordss = (data) => ({
    type: CREATE_RECORDSS,
    payload: data,
  });
  
  export const createRecordssSuccess = (data) => ({
    type: CREATE_RECORDSS_SUCCESS,
    payload: data,
  });
  
  export const createRecordssFailure = () => ({
    type: CREATE_RECORDSS_FAILURE,
  });

  export const getRecordss = (data) => ({
    type: GET_RECORDSS,
    payload: data,
  });
  
  export const getRecordssSuccess = (data) => ({
    type: GET_RECORDSS_SUCCESS,
    payload: data,
  });
  
  export const getRecordssFailure = () => ({
    type: GET_RECORDSS_FAILURE,
  });

  export const updateRecordss = (data) => ({
    type: UPDATE_RECORDSS,
    payload: data,
  });
  
  export const updateRecordssSuccess = (data) => ({
    type: UPDATE_RECORDSS_SUCCESS,
    payload: data,
  });
  
  export const updateRecordssFailure = () => ({
    type: UPDATE_RECORDSS_FAILURE,
  });

  export const deleteRecordss = (data) => ({
    type: DELETE_RECORDSS,
    payload: data,
  });
  
  export const deleteRecordssSuccess = (data) => ({
    type: DELETE_RECORDSS_SUCCESS,
    payload: data,
  });
  
  export const deleteRecordssFailure = () => ({
    type: DELETE_RECORDSS_FAILURE,
  });
  