import {
    CREATE_EMAIL_TEMPLATE,
    CREATE_EMAIL_TEMPLATE_SUCCESS,
    CREATE_EMAIL_TEMPLATE_FAILURE,
    GET_EMAIL_TEMPLATE,
    GET_EMAIL_TEMPLATE_SUCCESS,
    GET_EMAIL_TEMPLATE_FAILURE
  } from "../actions/EmailTemplate/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createEmailTemplate = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createEmailTemplateSuccess = (state, action) => {
    console.log("reducer action------>>>>>>",action)
    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createEmailTemplateFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getEmailTemplate = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const getEmailTemplateSuccess = (state, action) => {
    console.log("action.payload-------->>>>>>>>",action.payload)
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };
  
  const getEmailTemplateFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const emailTemplateReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_EMAIL_TEMPLATE:
        return createEmailTemplate(state, action);
      case CREATE_EMAIL_TEMPLATE_SUCCESS:
        return createEmailTemplateSuccess(state, action);
      case CREATE_EMAIL_TEMPLATE_FAILURE:
        return createEmailTemplateFailed(state, action);
      case GET_EMAIL_TEMPLATE:
        return getEmailTemplate(state, action);
      case GET_EMAIL_TEMPLATE_SUCCESS:
        return getEmailTemplateSuccess(state, action);
      case GET_EMAIL_TEMPLATE_FAILURE:
        return getEmailTemplateFailed(state, action);
      default:
        return state;
    }
  };
  
  export default emailTemplateReducer;
  