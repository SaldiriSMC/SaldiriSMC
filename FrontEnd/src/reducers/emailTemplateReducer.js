import {
    CREATE_EMAIL_TEMPLATE,
    CREATE_EMAIL_TEMPLATE_SUCCESS,
    CREATE_EMAIL_TEMPLATE_FAILURE,
  } from "../actions/EmailTemplate/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
  };
  
  // course category reducer funtions
  const createEmailTemplate = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createEmailTemplateSuccess = (state, action) => {
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };
  
  const createEmailTemplateFailed = (state, action) => ({
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
      default:
        return state;
    }
  };
  
  export default emailTemplateReducer;
  