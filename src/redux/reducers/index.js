import {combineReducers} from 'redux';

import AuthReducer from './auth.reducer';
import BookingsReducer from './fetchBookings.reducer';
import FilterReducer from './filter.reducer';
import ReportsReducer from './reports.reducer';
import ReinsSusReducer from './riensus.reducer'

const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  bookings: BookingsReducer,
  filters: FilterReducer,
  reports: ReportsReducer,
  reinsus: ReinsSusReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
