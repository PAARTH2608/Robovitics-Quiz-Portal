import {AuthTypes} from '../types';

const initialState = {
  loading: false,
  data: '',
  msg: '',
  random: false,
};

const UploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.UPLOAD_SUCCESS:
      return {
        data: action.data.data,
        msg: action.data.msg,
        isLoggedIn: true,
        random: true
      }
    case AuthTypes.UPLOAD_ERROR:
      return {
        isLoggedIn: false,
        msg: action.error.msg,
        random: false
      }
    case AuthTypes.UPLOAD_REQUEST:
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

export default UploadReducer;
