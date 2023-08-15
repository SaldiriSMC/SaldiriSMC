import {
    CREATE_SSSS,
    CREATE_SSSS_SUCCESS,
    CREATE_SSSS_FAILURE,
    GET_SSSS,
    GET_SSSS_SUCCESS,
    GET_SSSS_FAILURE,
    UPDATE_SSSS,
    UPDATE_SSSS_SUCCESS,
    UPDATE_SSSS_FAILURE,
    DELETE_SSSS,
    DELETE_SSSS_SUCCESS,
    DELETE_SSSS_FAILURE
  } from "../actions/ssss/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createssss = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createssssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createssssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getssss = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getssssSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getssssFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updatessss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updatessssSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updatessssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deletessss = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deletessssSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deletessssFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const ssssReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_SSSS:
        return createssss(state, action);
      case CREATE_SSSS_SUCCESS:
        return createssssSuccess(state, action);
      case CREATE_SSSS_FAILURE:
        return createssssFailed(state, action);
      case GET_SSSS:
        return getssss(state, action);
      case GET_SSSS_SUCCESS:
        return getssssSuccess(state, action);
      case GET_SSSS_FAILURE:
        return getssssFailed(state, action);
      case UPDATE_SSSS:
        return updatessss(state, action);
      case UPDATE_SSSS_SUCCESS:
        return updatessssSuccess(state, action);
      case UPDATE_SSSS_FAILURE:
        return updatessssFailed(state, action);
      case DELETE_SSSS:
        return deletessss(state, action);
      case DELETE_SSSS_SUCCESS:
        return deletessssSuccess(state, action);
      case DELETE_SSSS_FAILURE:
        return deletessssFailed(state, action);
      default:
        return state;
    }
  };
  
  export default ssssReducer;
  