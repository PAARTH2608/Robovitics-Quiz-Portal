import {AuthTypes} from '../types';

const initialState = {
  loading: false,
  phone: '',
  password: '',
  token: '',
  showLanding: false,
  validCredentials: false,
  isLoggedIn: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        name: action.data.adminInfo.name,
        phone: action.data.adminInfo.phone,
        token: action.data.token,
        showLanding: !state.showLanding,
        validCredentials: true,
        isLoggedIn: true,
      }
    case AuthTypes.LOGIN_ERROR:
      return {
        message: action.error,
        validCredentials:false,
        isLoggedIn: false
      }
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        phone: '',
        password: '',
        token: '',
        showLanding: false,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default AuthReducer;
