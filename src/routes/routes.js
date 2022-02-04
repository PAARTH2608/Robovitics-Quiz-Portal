import { Navigate } from 'react-router-dom';
import Domains from '../components/pages/Domains';
import Error from '../components/pages/Error';
import Berror from '../components/pages/Berror';
import Finish from '../components/pages/Finish';
import Rules from '../components/pages/Rules';
import Start from '../components/pages/Start';
import Submit from '../components/pages/Submit';

const routes = (isLoggedIn, random) => [
	{
		path: '/',
		element: <Start />,
	},
	{
		path: '/rules',
		element: isLoggedIn && !random ? <Rules /> : <Navigate to='/' />,
	},
	{
		path: '/domains',
		element: isLoggedIn && !random ? <Domains /> : <Navigate to='/' />,
	},
	{
		path: '/submit',
		element: isLoggedIn && !random ? <Submit /> : <Navigate to='/' />,
	},
	{
		path: '/finish',
		element: isLoggedIn && !random ? <Finish /> : <Navigate to='/' />,
	},
	{
		path: '/error',
		element: <Error />,
	},
	{
		path: '/browsererror',
		element: <Berror />,
	},
];

export default routes;
