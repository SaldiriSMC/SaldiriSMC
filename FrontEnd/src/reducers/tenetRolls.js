import {
  GET_ROLE,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAILURE,
  ADD_ROLE,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  DELETE_ROLE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
  UPDATE_ROLE,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  } from "../actions/AddRols/actionTypes";
  
  const initialState = {
    getListLoading: false,
    allRollsdata: [],
    dataUpdate:true,
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
    dataUpdate:false,
  });
  
  const createRollSuccess = (state, action) => {
    console.log("action.payload-------->>>>>>>>",action.payload)
    return {
      ...state,
      getListLoading: false,
      dataUpdate: true,
      data: [],
    };
  };
  
  const createRollFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
    dataUpdate:false,
  });
  

  const deleteRoll = (state, action) => ({
    ...state,
    getListLoading: true,
    dataUpdate:false,
  });
  
  const deleteRollSuccess = (state, action) => {
    console.log("action.payload-------->>>>>>>>",action.payload)
    return {
      ...state,
      getListLoading: false,
      dataUpdate: true,
      data: [],
    };
  };
  
  const deleteRollFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
    dataUpdate:false,
  });
  
  const updateRoll = (state, action) => ({
    ...state,
    getListLoading: true,
    dataUpdate:false,
  });
  
  const updateRollSuccess = (state, action) => {
    console.log("action.payload-------->>>>>>>>",action.payload)
    return {
      ...state,
      getListLoading: false,
      dataUpdate: true,
      data: [],
    };
  };
  
  const updateRollFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
    dataUpdate:false,
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
      case DELETE_ROLE:
        return deleteRoll(state, action);
      case DELETE_ROLE_SUCCESS:
        return createRollSuccess(state, action);
      case ADD_ROLE_FAILURE:
        return createRollFailed(state, action);
      case UPDATE_ROLE:
        return updateRoll(state, action);
      case UPDATE_ROLE_SUCCESS:
        return updateRollSuccess(state, action);
      case UPDATE_ROLE_FAILURE:
        return updateRollFailed(state, action);
      default:
        return state;
    }
  };
  
  export default emailTemplateReducer;
  