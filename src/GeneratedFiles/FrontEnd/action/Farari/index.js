import {
    CREATE_FARARI,
    CREATE_FARARI_SUCCESS,
    CREATE_FARARI_FAILURE,
    GET_FARARI,
    GET_FARARI_SUCCESS,
    GET_FARARI_FAILURE,
    UPDATE_FARARI,
    UPDATE_FARARI_SUCCESS,
    UPDATE_FARARI_FAILURE,
    DELETE_FARARI,
    DELETE_FARARI_SUCCESS,
    DELETE_FARARI_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createFarari = (data) => ({
    type: CREATE_FARARI,
    payload: data,
  });
  
  export const createFarariSuccess = (data) => ({
    type: CREATE_FARARI_SUCCESS,
    payload: data,
  });
  
  export const createFarariFailure = () => ({
    type: CREATE_FARARI_FAILURE,
  });

  export const getFarari = (data) => ({
    type: GET_FARARI,
    payload: data,
  });
  
  export const getFarariSuccess = (data) => ({
    type: GET_FARARI_SUCCESS,
    payload: data,
  });
  
  export const getFarariFailure = () => ({
    type: GET_FARARI_FAILURE,
  });

  export const updateFarari = (data) => ({
    type: UPDATE_FARARI,
    payload: data,
  });
  
  export const updateFarariSuccess = (data) => ({
    type: UPDATE_FARARI_SUCCESS,
    payload: data,
  });
  
  export const updateFarariFailure = () => ({
    type: UPDATE_FARARI_FAILURE,
  });

  export const deleteFarari = (data) => ({
    type: DELETE_FARARI,
    payload: data,
  });
  
  export const deleteFarariSuccess = (data) => ({
    type: DELETE_FARARI_SUCCESS,
    payload: data,
  });
  
  export const deleteFarariFailure = () => ({
    type: DELETE_FARARI_FAILURE,
  });
  