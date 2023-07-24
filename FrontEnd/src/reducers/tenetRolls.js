import {
  GET_ROLE,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAILURE,
  ADD_ROLE,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  } from "../actions/AddRols/actionTypes";
  
  const initialState = {
    getListLoading: false,
    allRollsdata: [],
    createData:null
  };
  
  // course category reducer funtions
  const getRolls = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const getRollsSuccess = (state, action) => {
    console.log("reducer action------>>>>>>",action)
    return {
      ...state,
      getListLoading: false,
      allRollsdata: action.payload,
    };
  };
  
  const getRollsFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    allRollsdata: [],
  });

  const createRoll = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createRollSuccess = (state, action) => {
    console.log("action.payload-------->>>>>>>>",action.payload)
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };
  
  const createRollFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const emailTemplateReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ROLE:
        return getRolls(state, action);
      case GET_ROLE_SUCCESS:
        return getRollsSuccess(state, action);
      case GET_ROLE_FAILURE:
        return getRollsFailed(state, action);
      case ADD_ROLE:
        return createRoll(state, action);
      case ADD_ROLE_SUCCESS:
        return createRollSuccess(state, action);
      case ADD_ROLE_FAILURE:
        return createRollFailed(state, action);
      default:
        return state;
    }
  };
  
  export default emailTemplateReducer;
  