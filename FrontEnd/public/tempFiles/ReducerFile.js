import {
    CREATE_#tableTitle,
    CREATE_#tableTitle_SUCCESS,
    CREATE_#tableTitle_FAILURE,
    GET_#tableTitle,
    GET_#tableTitle_SUCCESS,
    GET_#tableTitle_FAILURE,
    UPDATE_#tableTitle,
    UPDATE_#tableTitle_SUCCESS,
    UPDATE_#tableTitle_FAILURE,
    DELETE_#tableTitle,
    DELETE_#tableTitle_SUCCESS,
    DELETE_#tableTitle_FAILURE
  } from "../actions/#tableName/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const create#tableName = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const create#tableNameSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const create#tableNameFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const get#tableName = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const get#tableNameSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const get#tableNameFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const update#tableName = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const update#tableNameSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const update#tableNameFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const delete#tableName = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const delete#tableNameSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
    };
  };  
  const delete#tableNameFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const #tableNameReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_#tableTitle:
        return create#tableName(state, action);
      case CREATE_#tableTitle_SUCCESS:
        return create#tableNameSuccess(state, action);
      case CREATE_#tableTitle_FAILURE:
        return create#tableNameFailed(state, action);
      case GET_#tableTitle:
        return get#tableName(state, action);
      case GET_#tableTitle_SUCCESS:
        return get#tableNameSuccess(state, action);
      case GET_#tableTitle_FAILURE:
        return get#tableNameFailed(state, action);
      case UPDATE_#tableTitle:
        return update#tableName(state, action);
      case UPDATE_#tableTitle_SUCCESS:
        return update#tableNameSuccess(state, action);
      case UPDATE_#tableTitle_FAILURE:
        return update#tableNameFailed(state, action);
      case DELETE_#tableTitle:
        return delete#tableName(state, action);
      case DELETE_#tableTitle_SUCCESS:
        return delete#tableNameSuccess(state, action);
      case DELETE_#tableTitle_FAILURE:
        return delete#tableNameFailed(state, action);
      default:
        return state;
    }
  };
  
  export default #tableNameReducer;
  