import { persistReducer, persistStore } from 'redux-persist';

import ReduxPersist from '../config/redux.Persist.config';
import configureStore from './configureStore';
import reducers from './reducers';
import rootSaga from './sagas';

// Redux Persist
// const persistConfig = ReduxPersist.storeConfig;
// const finalReducers = persistReducer(persistConfig, reducers);

const { store } = configureStore(reducers, rootSaga);

const persistor = persistStore(store);

export { store, persistor };
