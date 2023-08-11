import {
    CREATE_USERLIST,
    CREATE_USERLIST_SUCCESS,
    CREATE_USERLIST_FAILURE,
    GET_USERLIST,
    GET_USERLIST_SUCCESS,
    GET_USERLIST_FAILURE,
    UPDATE_USERLIST,
    UPDATE_USERLIST_SUCCESS,
    UPDATE_USERLIST_FAILURE,
    DELETE_USERLIST,
    DELETE_USERLIST_SUCCESS,
    DELETE_USERLIST_FAILURE
  } from "../actions/UserList/actionTypes";
  
  const initialState = {
    getListLoading: false,
    data: null,
    createData:null
  };
  
  // course category reducer funtions
  const createUserList = (state, action) => ({
    ...state,
    getListLoading: true,
  });
  
  const createUserListSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      createData: action.payload,
    };
  };
  
  const createUserListFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    createData: [],
  });

  const getUserList = (state, action) => ({
    ...state,
    // getListLoading: true,
  });
  
  const getUserListSuccess = (state, action) => {
   
    return {
      ...state,
      // getListLoading: false,
      data: action.payload,
    };
  };
  
  const getUserListFailed = (state, action) => ({
    ...state,
    // getListLoading: false,
    data: [],
  });

  const updateUserList = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const updateUserListSuccess = (state, action) => {

    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const updateUserListFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });

  const deleteUserList = (state, action) => ({
    ...state,
     getListLoading: true,
  });
  
  const deleteUserListSuccess = (state, action) => {
    
    return {
      ...state,
      getListLoading: false,
      data: action.payload,
    };
  };  
  const deleteUserListFailed = (state, action) => ({
    ...state,
    getListLoading: false,
    data: [],
  });
  
  const UserListReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USERLIST:
        return createUserList(state, action);
      case CREATE_USERLIST_SUCCESS:
        return createUserListSuccess(state, action);
      case CREATE_USERLIST_FAILURE:
        return createUserListFailed(state, action);
      case GET_USERLIST:
        return getUserList(state, action);
      case GET_USERLIST_SUCCESS:
        return getUserListSuccess(state, action);
      case GET_USERLIST_FAILURE:
        return getUserListFailed(state, action);
      case UPDATE_USERLIST:
        return updateUserList(state, action);
      case UPDATE_USERLIST_SUCCESS:
        return updateUserListSuccess(state, action);
      case UPDATE_USERLIST_FAILURE:
        return updateUserListFailed(state, action);
      case DELETE_USERLIST:
        return deleteUserList(state, action);
      case DELETE_USERLIST_SUCCESS:
        return deleteUserListSuccess(state, action);
      case DELETE_USERLIST_FAILURE:
        return deleteUserListFailed(state, action);
      default:
        return state;
    }
  };
  
  export default UserListReducer;
  