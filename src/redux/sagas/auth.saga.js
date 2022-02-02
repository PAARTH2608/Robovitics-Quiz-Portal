import { put, call, takeLatest, all } from "redux-saga/effects";
import { AuthService } from "../../services";
// import { push } from "react-router-redux";

import { AuthTypes } from "../types";
const authService = new AuthService();
export function* login(cred) {
  try {
    const user = yield call(authService.login, cred.payload);
    // console.log('hm', user);
    if (user.error) {
      yield put({ type: AuthTypes.LOGIN_ERROR, error: user.message });
    } else {
      yield put({ type: AuthTypes.LOGIN_SUCCESS, data: user });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
  ]);
}
