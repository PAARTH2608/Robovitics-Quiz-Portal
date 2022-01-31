import {put, call, takeLatest, all} from 'redux-saga/effects';
import {UploadService} from '../../services';

import {AuthTypes} from '../types';
const uploadService = new UploadService() 
export function* uploadDoc(cred) {
  try {
    const ques = yield call(uploadService.uploadDoc, cred.payload);
    // console.log('hm', user);
    if (ques.error) {
      yield put({type: AuthTypes.UPLOAD_ERROR, error: ques.message});
    } else {
      yield put({type: AuthTypes.UPLOAD_SUCCESS, data: ques});
    }
  } catch (error) {
    yield put({type: AuthTypes.UPLOAD_ERROR, error});
  }
}


export default function* uploadSaga() {
  yield all([
    takeLatest(AuthTypes.UPLOAD_REQUEST, uploadDoc),
  ]);
}
