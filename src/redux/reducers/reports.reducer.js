import { AuthTypes } from "../types";

const initialState = [];

const ReportsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthTypes.REPORTS_SUCCESS:
            return {
            ...state,
            reports: action.data
        }
        case AuthTypes.REPORTS_ERROR:
          return {
            message: action.data.error
          }
      default:
        return state;
    }
  };
  
  export default ReportsReducer;