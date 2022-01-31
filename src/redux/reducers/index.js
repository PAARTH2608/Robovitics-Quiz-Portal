import {combineReducers} from 'redux';

import AuthReducer from './auth.reducer';
import QuestionReducer from './que.reducer';
import UploadReducer from './upload.reducer';

const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  question: QuestionReducer,
  upload: UploadReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
