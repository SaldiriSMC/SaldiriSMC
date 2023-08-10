import {
    CREATE_CARLIST,
    CREATE_CARLIST_SUCCESS,
    CREATE_CARLIST_FAILURE,
    GET_CARLIST,
    GET_CARLIST_SUCCESS,
    GET_CARLIST_FAILURE,
    UPDATE_CARLIST,
    UPDATE_CARLIST_SUCCESS,
    UPDATE_CARLIST_FAILURE,
    DELETE_CARLIST,
    DELETE_CARLIST_SUCCESS,
    DELETE_CARLIST_FAILURE
  } from "../actions/carList/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createcarList = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createcarListSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createcarListFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getcarList = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getcarListSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getcarListFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updatecarList = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updatecarListSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updatecarListFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deletecarList = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deletecarListSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deletecarListFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const carListReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CARLIST:
        return createcarList(state, action);
      case CREATE_CARLIST_SUCCESS:
        return createcarListSuccess(state, action);
      case CREATE_CARLIST_FAILURE:
        return createcarListFailed(state, action);
      case GET_CARLIST:
        return getcarList(state, action);
      case GET_CARLIST_SUCCESS:
        return getcarListSuccess(state, action);
      case GET_CARLIST_FAILURE:
        return getcarListFailed(state, action);
      case UPDATE_CARLIST:
        return updatecarList(state, action);
      case UPDATE_CARLIST_SUCCESS:
        return updatecarListSuccess(state, action);
      case UPDATE_CARLIST_FAILURE:
        return updatecarListFailed(state, action);
      case DELETE_CARLIST:
        return deletecarList(state, action);
      case DELETE_CARLIST_SUCCESS:
        return deletecarListSuccess(state, action);
      case DELETE_CARLIST_FAILURE:
        return deletecarListFailed(state, action);
      default:
        return state;
    }
  };
  
  export default carListReducer;
  