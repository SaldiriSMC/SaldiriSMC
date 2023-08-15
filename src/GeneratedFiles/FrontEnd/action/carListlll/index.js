import {
    CREATE_CARLISTLLL,
    CREATE_CARLISTLLL_SUCCESS,
    CREATE_CARLISTLLL_FAILURE,
    GET_CARLISTLLL,
    GET_CARLISTLLL_SUCCESS,
    GET_CARLISTLLL_FAILURE,
    UPDATE_CARLISTLLL,
    UPDATE_CARLISTLLL_SUCCESS,
    UPDATE_CARLISTLLL_FAILURE,
    DELETE_CARLISTLLL,
    DELETE_CARLISTLLL_SUCCESS,
    DELETE_CARLISTLLL_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createcarListlll = (data) => ({
    type: CREATE_CARLISTLLL,
    payload: data,
  });
  
  export const createcarListlllSuccess = (data) => ({
    type: CREATE_CARLISTLLL_SUCCESS,
    payload: data,
  });
  
  export const createcarListlllFailure = () => ({
    type: CREATE_CARLISTLLL_FAILURE,
  });

  export const getcarListlll = (data) => ({
    type: GET_CARLISTLLL,
    payload: data,
  });
  
  export const getcarListlllSuccess = (data) => ({
    type: GET_CARLISTLLL_SUCCESS,
    payload: data,
  });
  
  export const getcarListlllFailure = () => ({
    type: GET_CARLISTLLL_FAILURE,
  });

  export const updatecarListlll = (data) => ({
    type: UPDATE_CARLISTLLL,
    payload: data,
  });
  
  export const updatecarListlllSuccess = (data) => ({
    type: UPDATE_CARLISTLLL_SUCCESS,
    payload: data,
  });
  
  export const updatecarListlllFailure = () => ({
    type: UPDATE_CARLISTLLL_FAILURE,
  });

  export const deletecarListlll = (data) => ({
    type: DELETE_CARLISTLLL,
    payload: data,
  });
  
  export const deletecarListlllSuccess = (data) => ({
    type: DELETE_CARLISTLLL_SUCCESS,
    payload: data,
  });
  
  export const deletecarListlllFailure = () => ({
    type: DELETE_CARLISTLLL_FAILURE,
  });
  