import storage from 'redux-persist/lib/storage';
// import AsyncStorage from '@react-native-community/async-storage';

const REDUX_PERSIST = {
	active: false,
	reducerVersion: '1.0',
	storeConfig: {
		key: 'primary',
		storage: storage,
		// blacklist: [], // Add the reducers that you don't wanna persist.
		// whitelist: ['auth'], // Add the reducers which you wanna persist, for eg., AuthReducer
	},
};

export default REDUX_PERSIST;
