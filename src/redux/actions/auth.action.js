import {AuthTypes} from '../types';

export const login = (data) => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload: data,
});
export const loginError = () => ({
  type: AuthTypes.LOGIN_ERROR
})
export const loggenIn = (user) => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: user,
});


export const getBookings = (token) => ({
  type: AuthTypes.BOOKINGS_REQUEST,
  payload: token
})
export const haveBookings = (bookings) => ({
  type: AuthTypes.BOOKINGS_SUCCESS,
  payload: bookings
});


export const showLanding = () => ({
  type: AuthTypes.TOGGLE
});

export const getReports = (token) => ({
  type: AuthTypes.REPORTS_REQUEST,
  payload: token
})
export const haveReports = (reports) => ({
  type: AuthTypes.REPORTS_SUCCESS,
  payload: reports
})

export const reInstate = credentials => ({
  type: AuthTypes.REINSTATE_REQUEST,
  payload: credentials
})
export const suspend = credentials => ({
  type: AuthTypes.SUSPEND_REQUEST,
  payload: credentials
})
export function searchText(text){
    return {
      type: AuthTypes.SEARCH,
      payload: text
    }
}

export const logout = () => ({
  type: AuthTypes.LOGOUT_REQUEST,
  payload: {},
});
