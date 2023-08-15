import {
    CREATE_RECORDSDDFDSDSSSSDSS,
    CREATE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    CREATE_RECORDSDDFDSDSSSSDSS_FAILURE,
    GET_RECORDSDDFDSDSSSSDSS,
    GET_RECORDSDDFDSDSSSSDSS_SUCCESS,
    GET_RECORDSDDFDSDSSSSDSS_FAILURE,
    UPDATE_RECORDSDDFDSDSSSSDSS,
    UPDATE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    UPDATE_RECORDSDDFDSDSSSSDSS_FAILURE,
    DELETE_RECORDSDDFDSDSSSSDSS,
    DELETE_RECORDSDDFDSDSSSSDSS_SUCCESS,
    DELETE_RECORDSDDFDSDSSSSDSS_FAILURE
  } from "../actions/Recordsddfdsdssssdss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createRecordsddfdsdssssdss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRecordsddfdsdssssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createRecordsddfdsdssssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getRecordsddfdsdssssdss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getRecordsddfdsdssssdssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getRecordsddfdsdssssdssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateRecordsddfdsdssssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateRecordsddfdsdssssdssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateRecordsddfdsdssssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteRecordsddfdsdssssdss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteRecordsddfdsdssssdssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteRecordsddfdsdssssdssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const RecordsddfdsdssssdssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_RECORDSDDFDSDSSSSDSS:
        return createRecordsddfdsdssssdss(state, action);
      case CREATE_RECORDSDDFDSDSSSSDSS_SUCCESS:
        return createRecordsddfdsdssssdssSuccess(state, action);
      case CREATE_RECORDSDDFDSDSSSSDSS_FAILURE:
        return createRecordsddfdsdssssdssFailed(state, action);
      case GET_RECORDSDDFDSDSSSSDSS:
        return getRecordsddfdsdssssdss(state, action);
      case GET_RECORDSDDFDSDSSSSDSS_SUCCESS:
        return getRecordsddfdsdssssdssSuccess(state, action);
      case GET_RECORDSDDFDSDSSSSDSS_FAILURE:
        return getRecordsddfdsdssssdssFailed(state, action);
      case UPDATE_RECORDSDDFDSDSSSSDSS:
        return updateRecordsddfdsdssssdss(state, action);
      case UPDATE_RECORDSDDFDSDSSSSDSS_SUCCESS:
        return updateRecordsddfdsdssssdssSuccess(state, action);
      case UPDATE_RECORDSDDFDSDSSSSDSS_FAILURE:
        return updateRecordsddfdsdssssdssFailed(state, action);
      case DELETE_RECORDSDDFDSDSSSSDSS:
        return deleteRecordsddfdsdssssdss(state, action);
      case DELETE_RECORDSDDFDSDSSSSDSS_SUCCESS:
        return deleteRecordsddfdsdssssdssSuccess(state, action);
      case DELETE_RECORDSDDFDSDSSSSDSS_FAILURE:
        return deleteRecordsddfdsdssssdssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default RecordsddfdsdssssdssReducer;
  