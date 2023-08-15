import {
    CREATE_FARARIES,
    CREATE_FARARIES_SUCCESS,
    CREATE_FARARIES_FAILURE,
    GET_FARARIES,
    GET_FARARIES_SUCCESS,
    GET_FARARIES_FAILURE,
    UPDATE_FARARIES,
    UPDATE_FARARIES_SUCCESS,
    UPDATE_FARARIES_FAILURE,
    DELETE_FARARIES,
    DELETE_FARARIES_SUCCESS,
    DELETE_FARARIES_FAILURE
  } from "../actions/Fararies/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createFararies = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createFarariesSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createFarariesFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getFararies = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getFarariesSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getFarariesFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateFararies = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateFarariesSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateFarariesFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteFararies = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteFarariesSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteFarariesFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const FarariesReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_FARARIES:
        return createFararies(state, action);
      case CREATE_FARARIES_SUCCESS:
        return createFarariesSuccess(state, action);
      case CREATE_FARARIES_FAILURE:
        return createFarariesFailed(state, action);
      case GET_FARARIES:
        return getFararies(state, action);
      case GET_FARARIES_SUCCESS:
        return getFarariesSuccess(state, action);
      case GET_FARARIES_FAILURE:
        return getFarariesFailed(state, action);
      case UPDATE_FARARIES:
        return updateFararies(state, action);
      case UPDATE_FARARIES_SUCCESS:
        return updateFarariesSuccess(state, action);
      case UPDATE_FARARIES_FAILURE:
        return updateFarariesFailed(state, action);
      case DELETE_FARARIES:
        return deleteFararies(state, action);
      case DELETE_FARARIES_SUCCESS:
        return deleteFarariesSuccess(state, action);
      case DELETE_FARARIES_FAILURE:
        return deleteFarariesFailed(state, action);
      default:
        return state;
    }
  };
  
  export default FarariesReducer;
  