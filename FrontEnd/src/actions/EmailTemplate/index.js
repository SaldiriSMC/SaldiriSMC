import {
    CREATE_EMAIL_TEMPLATE,
    CREATE_EMAIL_TEMPLATE_SUCCESS,
    CREATE_EMAIL_TEMPLATE_FAILURE,
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
  