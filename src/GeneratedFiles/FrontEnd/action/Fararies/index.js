import {
    CREATE_FARARIES,
    CREATE_FARARIES_SUCCESS,
    CREATE_FARARIES_FAILURE,
    GET_FARARIES,
    GET_FARARIES_SUCCESS,
    GET_FARARIES_FAILURE,
    UPDATE_FARARIES,
    UPDATE_FARARIES_SUCCESS,
    UPDATE_FARARIES_FAILURE,
    DELETE_FARARIES,
    DELETE_FARARIES_SUCCESS,
    DELETE_FARARIES_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createFararies = (data) => ({
    type: CREATE_FARARIES,
    payload: data,
  });
  
  export const createFarariesSuccess = (data) => ({
    type: CREATE_FARARIES_SUCCESS,
    payload: data,
  });
  
  export const createFarariesFailure = () => ({
    type: CREATE_FARARIES_FAILURE,
  });

  export const getFararies = (data) => ({
    type: GET_FARARIES,
    payload: data,
  });
  
  export const getFarariesSuccess = (data) => ({
    type: GET_FARARIES_SUCCESS,
    payload: data,
  });
  
  export const getFarariesFailure = () => ({
    type: GET_FARARIES_FAILURE,
  });

  export const updateFararies = (data) => ({
    type: UPDATE_FARARIES,
    payload: data,
  });
  
  export const updateFarariesSuccess = (data) => ({
    type: UPDATE_FARARIES_SUCCESS,
    payload: data,
  });
  
  export const updateFarariesFailure = () => ({
    type: UPDATE_FARARIES_FAILURE,
  });

  export const deleteFararies = (data) => ({
    type: DELETE_FARARIES,
    payload: data,
  });
  
  export const deleteFarariesSuccess = (data) => ({
    type: DELETE_FARARIES_SUCCESS,
    payload: data,
  });
  
  export const deleteFarariesFailure = () => ({
    type: DELETE_FARARIES_FAILURE,
  });
  