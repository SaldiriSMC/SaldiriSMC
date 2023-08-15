import {
    CREATE_RECORDSSSDSS,
    CREATE_RECORDSSSDSS_SUCCESS,
    CREATE_RECORDSSSDSS_FAILURE,
    GET_RECORDSSSDSS,
    GET_RECORDSSSDSS_SUCCESS,
    GET_RECORDSSSDSS_FAILURE,
    UPDATE_RECORDSSSDSS,
    UPDATE_RECORDSSSDSS_SUCCESS,
    UPDATE_RECORDSSSDSS_FAILURE,
    DELETE_RECORDSSSDSS,
    DELETE_RECORDSSSDSS_SUCCESS,
    DELETE_RECORDSSSDSS_FAILURE
  } from "../actions/Recordsssdss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createRecordsssdss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRecordsssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createRecordsssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getRecordsssdss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getRecordsssdssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getRecordsssdssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateRecordsssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateRecordsssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateRecordsssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteRecordsssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteRecordsssdssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteRecordsssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const RecordsssdssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RECORDSSSDSS:
        return createRecordsssdss(state, action);
      case CREATE_RECORDSSSDSS_SUCCESS:
        return createRecordsssdssSuccess(state, action);
      case CREATE_RECORDSSSDSS_FAILURE:
        return createRecordsssdssFailed(state, action);
      case GET_RECORDSSSDSS:
        return getRecordsssdss(state, action);
      case GET_RECORDSSSDSS_SUCCESS:
        return getRecordsssdssSuccess(state, action);
      case GET_RECORDSSSDSS_FAILURE:
        return getRecordsssdssFailed(state, action);
      case UPDATE_RECORDSSSDSS:
        return updateRecordsssdss(state, action);
      case UPDATE_RECORDSSSDSS_SUCCESS:
        return updateRecordsssdssSuccess(state, action);
      case UPDATE_RECORDSSSDSS_FAILURE:
        return updateRecordsssdssFailed(state, action);
      case DELETE_RECORDSSSDSS:
        return deleteRecordsssdss(state, action);
      case DELETE_RECORDSSSDSS_SUCCESS:
        return deleteRecordsssdssSuccess(state, action);
      case DELETE_RECORDSSSDSS_FAILURE:
        return deleteRecordsssdssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default RecordsssdssReducer;
  