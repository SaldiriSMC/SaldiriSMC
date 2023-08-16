import {
  CREATE_CARLIST,
  CREATE_CARLIST_SUCCESS,
  CREATE_CARLIST_FAILURE,
  GET_CARLIST,
  GET_CARLIST_SUCCESS,
  GET_CARLIST_FAILURE,
  UPDATE_CARLIST,
  UPDATE_CARLIST_SUCCESS,
  UPDATE_CARLIST_FAILURE,
  DELETE_CARLIST,
  DELETE_CARLIST_SUCCESS,
  DELETE_CARLIST_FAILURE
} from "./actionTypes";

// Signin actions function
export const createcarList = (data) => ({
  type: CREATE_CARLIST,
  payload: data,
});

export const createcarListSuccess = (data) => ({
  type: CREATE_CARLIST_SUCCESS,
  payload: data,
});

export const createcarListFailure = () => ({
  type: CREATE_CARLIST_FAILURE,
});

export const getcarList = (data) => ({
  type: GET_CARLIST,
  payload: data,
});

export const getcarListSuccess = (data) => ({
  type: GET_CARLIST_SUCCESS,
  payload: data,
});

export const getcarListFailure = () => ({
  type: GET_CARLIST_FAILURE,
});

export const updatecarList = (data) => ({
  type: UPDATE_CARLIST,
  payload: data,
});

export const updatecarListSuccess = (data) => ({
  type: UPDATE_CARLIST_SUCCESS,
  payload: data,
});

export const updatecarListFailure = () => ({
  type: UPDATE_CARLIST_FAILURE,
});

export const deletecarList = (data) => ({
  type: DELETE_CARLIST,
  payload: data,
});

export const deletecarListSuccess = (data) => ({
  type: DELETE_CARLIST_SUCCESS,
  payload: data,
});

export const deletecarListFailure = () => ({
  type: DELETE_CARLIST_FAILURE,
});
