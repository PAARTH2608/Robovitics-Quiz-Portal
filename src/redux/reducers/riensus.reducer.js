import {AuthTypes} from '../types';

const initialState = {
  message: '',
};

const ReinsSusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.REINSTATE_SUCCESS:
      return {
        message: action.data.message
      }
    case AuthTypes.REINSTATE_ERROR:
      return {
        message: action.data.error,
      }
      case AuthTypes.SUSPEND_SUCCESS:
        return {
            message: action.data.message
        }
      case AuthTypes.SUSPEND_ERROR:
        return {
          message: action.data.error
        }
    default:
      return state;
  }
};

export default ReinsSusReducer;
