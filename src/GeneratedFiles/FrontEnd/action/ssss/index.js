import {
    CREATE_SSSS,
    CREATE_SSSS_SUCCESS,
    CREATE_SSSS_FAILURE,
    GET_SSSS,
    GET_SSSS_SUCCESS,
    GET_SSSS_FAILURE,
    UPDATE_SSSS,
    UPDATE_SSSS_SUCCESS,
    UPDATE_SSSS_FAILURE,
    DELETE_SSSS,
    DELETE_SSSS_SUCCESS,
    DELETE_SSSS_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createssss = (data) => ({
    type: CREATE_SSSS,
    payload: data,
  });
  
  export const createssssSuccess = (data) => ({
    type: CREATE_SSSS_SUCCESS,
    payload: data,
  });
  
  export const createssssFailure = () => ({
    type: CREATE_SSSS_FAILURE,
  });

  export const getssss = (data) => ({
    type: GET_SSSS,
    payload: data,
  });
  
  export const getssssSuccess = (data) => ({
    type: GET_SSSS_SUCCESS,
    payload: data,
  });
  
  export const getssssFailure = () => ({
    type: GET_SSSS_FAILURE,
  });

  export const updatessss = (data) => ({
    type: UPDATE_SSSS,
    payload: data,
  });
  
  export const updatessssSuccess = (data) => ({
    type: UPDATE_SSSS_SUCCESS,
    payload: data,
  });
  
  export const updatessssFailure = () => ({
    type: UPDATE_SSSS_FAILURE,
  });

  export const deletessss = (data) => ({
    type: DELETE_SSSS,
    payload: data,
  });
  
  export const deletessssSuccess = (data) => ({
    type: DELETE_SSSS_SUCCESS,
    payload: data,
  });
  
  export const deletessssFailure = () => ({
    type: DELETE_SSSS_FAILURE,
  });
  