import {
    CREATE_RECORDDFDSDSSSSDSS,
    CREATE_RECORDDFDSDSSSSDSS_SUCCESS,
    CREATE_RECORDDFDSDSSSSDSS_FAILURE,
    GET_RECORDDFDSDSSSSDSS,
    GET_RECORDDFDSDSSSSDSS_SUCCESS,
    GET_RECORDDFDSDSSSSDSS_FAILURE,
    UPDATE_RECORDDFDSDSSSSDSS,
    UPDATE_RECORDDFDSDSSSSDSS_SUCCESS,
    UPDATE_RECORDDFDSDSSSSDSS_FAILURE,
    DELETE_RECORDDFDSDSSSSDSS,
    DELETE_RECORDDFDSDSSSSDSS_SUCCESS,
    DELETE_RECORDDFDSDSSSSDSS_FAILURE
  } from "../actions/Recorddfdsdssssdss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createRecorddfdsdssssdss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRecorddfdsdssssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createRecorddfdsdssssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getRecorddfdsdssssdss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getRecorddfdsdssssdssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getRecorddfdsdssssdssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateRecorddfdsdssssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateRecorddfdsdssssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateRecorddfdsdssssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteRecorddfdsdssssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteRecorddfdsdssssdssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteRecorddfdsdssssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const RecorddfdsdssssdssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RECORDDFDSDSSSSDSS:
        return createRecorddfdsdssssdss(state, action);
      case CREATE_RECORDDFDSDSSSSDSS_SUCCESS:
        return createRecorddfdsdssssdssSuccess(state, action);
      case CREATE_RECORDDFDSDSSSSDSS_FAILURE:
        return createRecorddfdsdssssdssFailed(state, action);
      case GET_RECORDDFDSDSSSSDSS:
        return getRecorddfdsdssssdss(state, action);
      case GET_RECORDDFDSDSSSSDSS_SUCCESS:
        return getRecorddfdsdssssdssSuccess(state, action);
      case GET_RECORDDFDSDSSSSDSS_FAILURE:
        return getRecorddfdsdssssdssFailed(state, action);
      case UPDATE_RECORDDFDSDSSSSDSS:
        return updateRecorddfdsdssssdss(state, action);
      case UPDATE_RECORDDFDSDSSSSDSS_SUCCESS:
        return updateRecorddfdsdssssdssSuccess(state, action);
      case UPDATE_RECORDDFDSDSSSSDSS_FAILURE:
        return updateRecorddfdsdssssdssFailed(state, action);
      case DELETE_RECORDDFDSDSSSSDSS:
        return deleteRecorddfdsdssssdss(state, action);
      case DELETE_RECORDDFDSDSSSSDSS_SUCCESS:
        return deleteRecorddfdsdssssdssSuccess(state, action);
      case DELETE_RECORDDFDSDSSSSDSS_FAILURE:
        return deleteRecorddfdsdssssdssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default RecorddfdsdssssdssReducer;
  