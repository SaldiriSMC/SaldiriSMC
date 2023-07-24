import {
  LODER_FALSE,
  LODER_TRUE,
} from "../actions/Auth/actionTypes";
// import { useNavigate } from 'react-router-dom';
const initialState = {
  isLoading: false,
};

const loderTrue = (state, action) => ({
  ...state,
  isLoading: true,
});

const loderFalse = (state, action) => {

  return {
    ...state,
    isLoading: false,
  };
};


const loderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LODER_TRUE:
      return loderTrue(state, action);
    case LODER_FALSE:
      return loderFalse(state, action);
    default:
      return state;
  }
};

export default loderReducer;
