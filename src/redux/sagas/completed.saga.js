import {put, call, takeLatest, all} from 'redux-saga/effects';
import { CompletedService } from '../../services';

import {AuthTypes} from '../types';
const completedService = new CompletedService() 
export function* completed(cred) {
  try {
    const ques = yield call(completedService.completed, cred.payload);
    // console.log('hm', user);
    if (ques.error) {
      yield put({type: AuthTypes.COMPLETED_ERROR, error: ques.message});
    } else {
      yield put({type: AuthTypes.COMPLETED_SUCCESS, data: ques});
    }
  } catch (error) {
    yield put({type: AuthTypes.COMPLETED_ERROR, error});
  }
}


export default function* completedSaga() {
  yield all([
    takeLatest(AuthTypes.COMPLETED_REQUEST, completed),
  ]);
}
