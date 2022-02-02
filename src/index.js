import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

document.title = 'CCS-RoboVITics';

ReactDOM.render(
	<Provider store={store}>
		{/* <PersistGate persistor={persistor}> */}
		<HashRouter>
			<App />
		</HashRouter>
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById('root')
);
