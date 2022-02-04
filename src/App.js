import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from './routes/routes';
import { useEffect } from 'react';
import { login } from './redux/actions/auth.action';
import { isChrome } from 'react-device-detect';

function App() {
	console.log(isChrome, 'latest');
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const random = useSelector((state) => state.upload.random);
	const email = useSelector((state) => state.auth.email);
	const dispatch = useDispatch();
	console.log('hi');
	useEffect(() => {
		// console.log(random, 'this is random');
		if (random) {
			dispatch(login({ email: email }));
		}
	}, [random]);

	const routing = useRoutes(routes(isLoggedIn, random));
	return <>{routing}</>;
}

export default App;
