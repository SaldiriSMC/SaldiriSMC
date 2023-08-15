import {
    CREATE_FARARI,
    CREATE_FARARI_SUCCESS,
    CREATE_FARARI_FAILURE,
    GET_FARARI,
    GET_FARARI_SUCCESS,
    GET_FARARI_FAILURE,
    UPDATE_FARARI,
    UPDATE_FARARI_SUCCESS,
    UPDATE_FARARI_FAILURE,
    DELETE_FARARI,
    DELETE_FARARI_SUCCESS,
    DELETE_FARARI_FAILURE
  } from "../actions/Farari/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createFarari = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createFarariSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createFarariFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getFarari = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getFarariSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getFarariFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateFarari = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateFarariSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateFarariFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteFarari = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteFarariSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteFarariFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const FarariReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_FARARI:
        return createFarari(state, action);
      case CREATE_FARARI_SUCCESS:
        return createFarariSuccess(state, action);
      case CREATE_FARARI_FAILURE:
        return createFarariFailed(state, action);
      case GET_FARARI:
        return getFarari(state, action);
      case GET_FARARI_SUCCESS:
        return getFarariSuccess(state, action);
      case GET_FARARI_FAILURE:
        return getFarariFailed(state, action);
      case UPDATE_FARARI:
        return updateFarari(state, action);
      case UPDATE_FARARI_SUCCESS:
        return updateFarariSuccess(state, action);
      case UPDATE_FARARI_FAILURE:
        return updateFarariFailed(state, action);
      case DELETE_FARARI:
        return deleteFarari(state, action);
      case DELETE_FARARI_SUCCESS:
        return deleteFarariSuccess(state, action);
      case DELETE_FARARI_FAILURE:
        return deleteFarariFailed(state, action);
      default:
        return state;
    }
  };
  
  export default FarariReducer;
  