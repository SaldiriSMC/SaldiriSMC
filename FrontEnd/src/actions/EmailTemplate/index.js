import {
    CREATE_EMAIL_TEMPLATE,
    CREATE_EMAIL_TEMPLATE_SUCCESS,
    CREATE_EMAIL_TEMPLATE_FAILURE,
    GET_EMAIL_TEMPLATE,
    GET_EMAIL_TEMPLATE_SUCCESS,
    GET_EMAIL_TEMPLATE_FAILURE,
    UPDATE_EMAIL_TEMPLATE,
    UPDATE_EMAIL_TEMPLATE_SUCCESS,
    UPDATE_EMAIL_TEMPLATE_FAILURE,
    DELETE_EMAIL_TEMPLATE,
    DELETE_EMAIL_TEMPLATE_SUCCESS,
    DELETE_EMAIL_TEMPLATE_FAILURE
  } from "./actionTypes";
  
  // Signin actions function
  export const createTemplate = (data) => ({
    type: CREATE_EMAIL_TEMPLATE,
    payload: data,
  });
  
  export const createTemplateSuccess = (data) => ({
    type: CREATE_EMAIL_TEMPLATE_SUCCESS,
    payload: data,
  });
  
  export const createTemplateFailure = () => ({
    type: CREATE_EMAIL_TEMPLATE_FAILURE,
  });

  export const getTemplate = (data) => ({
    type: GET_EMAIL_TEMPLATE,
    payload: data,
  });
  
  export const getTemplateSuccess = (data) => ({
    type: GET_EMAIL_TEMPLATE_SUCCESS,
    payload: data,
  });
  
  export const getTemplateFailure = () => ({
    type: GET_EMAIL_TEMPLATE_FAILURE,
  });

  export const updateTemplate = (data) => ({
    type: UPDATE_EMAIL_TEMPLATE,
    payload: data,
  });
  
  export const updateTemplateSuccess = (data) => ({
    type: UPDATE_EMAIL_TEMPLATE_SUCCESS,
    payload: data,
  });
  
  export const updateTemplateFailure = () => ({
    type: UPDATE_EMAIL_TEMPLATE_FAILURE,
  });

  export const deleteTemplate = (data) => ({
    type: DELETE_EMAIL_TEMPLATE,
    payload: data,
  });
  
  export const deleteTemplateSuccess = (data) => ({
    type: DELETE_EMAIL_TEMPLATE_SUCCESS,
    payload: data,
  });
  
  export const deleteTemplateFailure = () => ({
    type: DELETE_EMAIL_TEMPLATE_FAILURE,
  });
  