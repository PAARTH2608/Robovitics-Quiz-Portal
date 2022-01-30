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


export const logout = () => ({
  type: AuthTypes.LOGOUT_REQUEST,
  payload: {},
});
