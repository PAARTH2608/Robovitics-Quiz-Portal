import {AuthTypes} from '../types';

const initialState = {
  loading: false,
  msg: '',
  error: '',
};

const CompletedReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.COMPLETED_SUCCESS:
      return {
        msg: action.data.msg,
        error: '',
      }
    case AuthTypes.COMPLETED_ERROR:
      return {
        isLoggedIn: false,
        msg: action.data.msg,
        error: '',
      }
    case AuthTypes.COMPLETED_REQUEST:
      return {
        ...state,
        email: '',
        showLanding: false,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default CompletedReducer;
