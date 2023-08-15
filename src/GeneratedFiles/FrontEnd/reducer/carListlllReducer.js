import {
    CREATE_CARLISTLLL,
    CREATE_CARLISTLLL_SUCCESS,
    CREATE_CARLISTLLL_FAILURE,
    GET_CARLISTLLL,
    GET_CARLISTLLL_SUCCESS,
    GET_CARLISTLLL_FAILURE,
    UPDATE_CARLISTLLL,
    UPDATE_CARLISTLLL_SUCCESS,
    UPDATE_CARLISTLLL_FAILURE,
    DELETE_CARLISTLLL,
    DELETE_CARLISTLLL_SUCCESS,
    DELETE_CARLISTLLL_FAILURE
  } from "../actions/carListlll/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createcarListlll = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createcarListlllSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createcarListlllFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getcarListlll = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getcarListlllSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getcarListlllFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updatecarListlll = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updatecarListlllSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updatecarListlllFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deletecarListlll = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deletecarListlllSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deletecarListlllFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const carListlllReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_CARLISTLLL:
        return createcarListlll(state, action);
      case CREATE_CARLISTLLL_SUCCESS:
        return createcarListlllSuccess(state, action);
      case CREATE_CARLISTLLL_FAILURE:
        return createcarListlllFailed(state, action);
      case GET_CARLISTLLL:
        return getcarListlll(state, action);
      case GET_CARLISTLLL_SUCCESS:
        return getcarListlllSuccess(state, action);
      case GET_CARLISTLLL_FAILURE:
        return getcarListlllFailed(state, action);
      case UPDATE_CARLISTLLL:
        return updatecarListlll(state, action);
      case UPDATE_CARLISTLLL_SUCCESS:
        return updatecarListlllSuccess(state, action);
      case UPDATE_CARLISTLLL_FAILURE:
        return updatecarListlllFailed(state, action);
      case DELETE_CARLISTLLL:
        return deletecarListlll(state, action);
      case DELETE_CARLISTLLL_SUCCESS:
        return deletecarListlllSuccess(state, action);
      case DELETE_CARLISTLLL_FAILURE:
        return deletecarListlllFailed(state, action);
      default:
        return state;
    }
  };
  
  export default carListlllReducer;
  