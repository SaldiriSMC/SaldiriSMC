import {
    CREATE_RECORDSS,
    CREATE_RECORDSS_SUCCESS,
    CREATE_RECORDSS_FAILURE,
    GET_RECORDSS,
    GET_RECORDSS_SUCCESS,
    GET_RECORDSS_FAILURE,
    UPDATE_RECORDSS,
    UPDATE_RECORDSS_SUCCESS,
    UPDATE_RECORDSS_FAILURE,
    DELETE_RECORDSS,
    DELETE_RECORDSS_SUCCESS,
    DELETE_RECORDSS_FAILURE
  } from "../actions/Recordss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createRecordss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRecordssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createRecordssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getRecordss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getRecordssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getRecordssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateRecordss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateRecordssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateRecordssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteRecordss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteRecordssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteRecordssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const RecordssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RECORDSS:
        return createRecordss(state, action);
      case CREATE_RECORDSS_SUCCESS:
        return createRecordssSuccess(state, action);
      case CREATE_RECORDSS_FAILURE:
        return createRecordssFailed(state, action);
      case GET_RECORDSS:
        return getRecordss(state, action);
      case GET_RECORDSS_SUCCESS:
        return getRecordssSuccess(state, action);
      case GET_RECORDSS_FAILURE:
        return getRecordssFailed(state, action);
      case UPDATE_RECORDSS:
        return updateRecordss(state, action);
      case UPDATE_RECORDSS_SUCCESS:
        return updateRecordssSuccess(state, action);
      case UPDATE_RECORDSS_FAILURE:
        return updateRecordssFailed(state, action);
      case DELETE_RECORDSS:
        return deleteRecordss(state, action);
      case DELETE_RECORDSS_SUCCESS:
        return deleteRecordssSuccess(state, action);
      case DELETE_RECORDSS_FAILURE:
        return deleteRecordssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default RecordssReducer;
  