import {all, fork} from 'redux-saga/effects';

// Sagas
// Import your sagas here!
// For eg:
import authSaga from './auth.saga';
import queSaga from './que.saga';

// Connect types to sagas
const rootSaga = function* root() {
  yield all([
    // Seperate the sagas by comma
    fork(authSaga),
    fork(queSaga),
  ]);
};

export default rootSaga;
