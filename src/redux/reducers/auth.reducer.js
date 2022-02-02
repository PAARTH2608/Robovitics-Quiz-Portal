import {AuthTypes} from '../types';

const initialState = {
  loading: false,
  email: '',
  id: '',
  registrationNumber: '',
  testStarted:false,
  QuestionSet:'',
  slot:{
    id:'',
    code:'',
    timing:'',
    isActive:false
  },
  showLanding: false,
  validCredentials: false,
  isLoggedIn: false,
  hasUploaded:false,
  hasCompleted:false,
  message: '',
  testEndAt:'',
  error:false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        email: action.data.email,
        id: action.data._id,
        showLanding: !state.showLanding,
        registrationNumber: action.data.registrationNumber,
        testStarted: action.data.testStarted,
        QuestionSet: action.data.QuestionSet,
        slot:{
          id:action.data.slot._id,
          code:action.data.slot.code,
          timing:action.data.slot.timing,
          isActive:action.data.slot.isActive
        },
        isLoggedIn: true,
        hasUploaded: action.data.hasUploaded,
        hasCompleted: action.data.hasCompleted,
        message:'',
        testEndAt:action.data.testEndAt,
        error:false
      }
    case AuthTypes.LOGIN_ERROR:
      return {
        isLoggedIn: false,
        message: action.error.message,
        hasUploaded: false,
        hasCompleted: false,
        error:true
      }
    case AuthTypes.LOGOUT_REQUEST:
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

export default AuthReducer;
