import {
    GET_ROLE,
    GET_ROLE_SUCCESS,
    GET_ROLE_FAILURE,
    ADD_ROLE,
    ADD_ROLE_SUCCESS,
    ADD_ROLE_FAILURE,
    DELETE_ROLE,
    DELETE_ROLE_SUCCESS,
    DELETE_ROLE_FAILURE,
  } from "./actionTypes";
  
  // Signin actions function
  export const getRoll = (data) => ({
    type: GET_ROLE,
    payload: data,
  });
  
  export const getRollSuccess = (data) => ({
    type: GET_ROLE_SUCCESS,
    payload: data,
  });
  
  export const getRollFailure = () => ({
    type: GET_ROLE_FAILURE,
  });




  // Signin actions function
  export const createRoll = (data) => ({
    type: ADD_ROLE,
    payload: data,
  });
  
  export const createRollSuccess = (data) => ({
    type: ADD_ROLE_SUCCESS,
    payload: data,
  });
  
  export const createRollFailure = () => ({
    type: ADD_ROLE_FAILURE,
  });

  // DELEET=============
  export const deleteRoll = (data) => ({
    type: DELETE_ROLE,
    payload: data,
  });
  
  export const deleteRollSuccess = (data) => ({
    type: DELETE_ROLE_SUCCESS,
    payload: data,
  });
  
  export const deleteRollFailure = () => ({
    type: DELETE_ROLE_FAILURE,
  });


