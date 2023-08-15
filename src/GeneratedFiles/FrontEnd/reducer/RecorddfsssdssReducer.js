import {
    CREATE_RECORDDFSSSDSS,
    CREATE_RECORDDFSSSDSS_SUCCESS,
    CREATE_RECORDDFSSSDSS_FAILURE,
    GET_RECORDDFSSSDSS,
    GET_RECORDDFSSSDSS_SUCCESS,
    GET_RECORDDFSSSDSS_FAILURE,
    UPDATE_RECORDDFSSSDSS,
    UPDATE_RECORDDFSSSDSS_SUCCESS,
    UPDATE_RECORDDFSSSDSS_FAILURE,
    DELETE_RECORDDFSSSDSS,
    DELETE_RECORDDFSSSDSS_SUCCESS,
    DELETE_RECORDDFSSSDSS_FAILURE
  } from "../actions/Recorddfsssdss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createRecorddfsssdss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRecorddfsssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createRecorddfsssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getRecorddfsssdss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getRecorddfsssdssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getRecorddfsssdssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateRecorddfsssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateRecorddfsssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateRecorddfsssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteRecorddfsssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteRecorddfsssdssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteRecorddfsssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const RecorddfsssdssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RECORDDFSSSDSS:
        return createRecorddfsssdss(state, action);
      case CREATE_RECORDDFSSSDSS_SUCCESS:
        return createRecorddfsssdssSuccess(state, action);
      case CREATE_RECORDDFSSSDSS_FAILURE:
        return createRecorddfsssdssFailed(state, action);
      case GET_RECORDDFSSSDSS:
        return getRecorddfsssdss(state, action);
      case GET_RECORDDFSSSDSS_SUCCESS:
        return getRecorddfsssdssSuccess(state, action);
      case GET_RECORDDFSSSDSS_FAILURE:
        return getRecorddfsssdssFailed(state, action);
      case UPDATE_RECORDDFSSSDSS:
        return updateRecorddfsssdss(state, action);
      case UPDATE_RECORDDFSSSDSS_SUCCESS:
        return updateRecorddfsssdssSuccess(state, action);
      case UPDATE_RECORDDFSSSDSS_FAILURE:
        return updateRecorddfsssdssFailed(state, action);
      case DELETE_RECORDDFSSSDSS:
        return deleteRecorddfsssdss(state, action);
      case DELETE_RECORDDFSSSDSS_SUCCESS:
        return deleteRecorddfsssdssSuccess(state, action);
      case DELETE_RECORDDFSSSDSS_FAILURE:
        return deleteRecorddfsssdssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default RecorddfsssdssReducer;
  