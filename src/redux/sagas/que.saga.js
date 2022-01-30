import {put, call, takeLatest, all} from 'redux-saga/effects';
import {QuestionService} from '../../services';

import {AuthTypes} from '../types';
const queService = new QuestionService() 
export function* questionFetch(cred) {
  try {
    const ques = yield call(queService.fetchQuestion, cred.payload);
    // console.log('hm', user);
    if (ques.error) {
      yield put({type: AuthTypes.QUESTION_ERROR, error: ques.message});
    } else {
      yield put({type: AuthTypes.QUESTION_SUCCESS, data: ques});
    }
  } catch (error) {
    yield put({type: AuthTypes.QUESTION_ERROR, error});
  }
}


export default function* queSaga() {
  yield all([
    takeLatest(AuthTypes.QUESTION_REQUEST, questionFetch),
  ]);
}
