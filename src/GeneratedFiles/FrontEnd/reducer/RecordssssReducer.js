import {
    CREATE_RECORDSSSS,
    CREATE_RECORDSSSS_SUCCESS,
    CREATE_RECORDSSSS_FAILURE,
    GET_RECORDSSSS,
    GET_RECORDSSSS_SUCCESS,
    GET_RECORDSSSS_FAILURE,
    UPDATE_RECORDSSSS,
    UPDATE_RECORDSSSS_SUCCESS,
    UPDATE_RECORDSSSS_FAILURE,
    DELETE_RECORDSSSS,
    DELETE_RECORDSSSS_SUCCESS,
    DELETE_RECORDSSSS_FAILURE
  } from "../actions/Recordssss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createRecordssss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRecordssssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createRecordssssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getRecordssss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getRecordssssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getRecordssssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateRecordssss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateRecordssssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateRecordssssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteRecordssss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteRecordssssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteRecordssssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const RecordssssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RECORDSSSS:
        return createRecordssss(state, action);
      case CREATE_RECORDSSSS_SUCCESS:
        return createRecordssssSuccess(state, action);
      case CREATE_RECORDSSSS_FAILURE:
        return createRecordssssFailed(state, action);
      case GET_RECORDSSSS:
        return getRecordssss(state, action);
      case GET_RECORDSSSS_SUCCESS:
        return getRecordssssSuccess(state, action);
      case GET_RECORDSSSS_FAILURE:
        return getRecordssssFailed(state, action);
      case UPDATE_RECORDSSSS:
        return updateRecordssss(state, action);
      case UPDATE_RECORDSSSS_SUCCESS:
        return updateRecordssssSuccess(state, action);
      case UPDATE_RECORDSSSS_FAILURE:
        return updateRecordssssFailed(state, action);
      case DELETE_RECORDSSSS:
        return deleteRecordssss(state, action);
      case DELETE_RECORDSSSS_SUCCESS:
        return deleteRecordssssSuccess(state, action);
      case DELETE_RECORDSSSS_FAILURE:
        return deleteRecordssssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default RecordssssReducer;
  