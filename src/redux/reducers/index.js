import {combineReducers} from 'redux';

import AuthReducer from './auth.reducer';
import QuestionReducer from './que.reducer';

const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  question: QuestionReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
