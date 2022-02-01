import {AuthTypes} from '../types';

const initialState = {
  loading: false,
  msg: '',
  err: '',
  complete: false,
};

const CompletedReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.COMPLETED_SUCCESS:
      return {
        msg: action.data.msg,
        err: '',
        complete: true,
      }
    case AuthTypes.COMPLETED_ERROR:
      return {
        isLoggedIn: false,
        err: action.data.msg,
      }
    case AuthTypes.COMPLETED_REQUEST:
      return {
        ...state,
        email: '',
        msg: "",
        isLoggedIn: false,
        complete: false,
      };
    default:
      return state;
  }
};

export default CompletedReducer;
