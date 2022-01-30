import { AuthTypes } from "../types";

const initialState = {
    adminInfoDetails: []
};

const BookingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case AuthTypes.BOOKINGS_SUCCESS:
        // console.log("its action ",action)
        return {
          ...state,
            adminInfoDetails: action.data
        }
        case AuthTypes.BOOKINGS_ERROR:
          return {
            message: action.data.error
          }
      default:
        return state;
    }
  };
  
  export default BookingsReducer;