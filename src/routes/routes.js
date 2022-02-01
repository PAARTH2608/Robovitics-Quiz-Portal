import { Navigate } from 'react-router-dom';
import Domains from '../components/pages/Domains';
import Error from '../components/pages/Error';
import Finish from '../components/pages/Finish';
import Rules from '../components/pages/Rules';
import Start from '../components/pages/Start';
import Submit from '../components/pages/Submit';

const routes = (isLoggedIn, hasCompleted) => [
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/rules',
    element: (isLoggedIn && !hasCompleted) ? <Rules /> : <Navigate to="/" />,
  },
  {
    path: '/domains',
    element: (isLoggedIn && !hasCompleted) ? <Domains /> : <Navigate to="/" />,
  },
  {
    path: '/submit',
    element: (isLoggedIn && !hasCompleted) ? <Submit /> : <Navigate to="/" />,
  },
  {
    path: '/finish',
    element: (isLoggedIn && !hasCompleted) ? <Finish /> : <Navigate to="/" />,
  },
  {
    path: '/error',
    element: !isLoggedIn && <Error />,
  },
];

export default routes;