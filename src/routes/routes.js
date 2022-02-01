import { Navigate } from 'react-router-dom';
import Domains from '../components/pages/Domains';
import Error from '../components/pages/Error';
import Finish from '../components/pages/Finish';
import Rules from '../components/pages/Rules';
import Start from '../components/pages/Start';
import Submit from '../components/pages/Submit';

const routes = (isLoggedIn, complete) => [
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/rules',
    element: (isLoggedIn && !complete) ? <Rules /> : <Navigate to="/error" />,
  },
  {
    path: '/domains',
    element: (isLoggedIn && !complete) ? <Domains /> : <Navigate to="/error" />,
  },
  {
    path: '/submit',
    element: (isLoggedIn && !complete) ? <Submit /> : <Navigate to="/error" />,
  },
  {
    path: '/finish',
    element: (isLoggedIn && !complete) ? <Finish /> : <Navigate to="/error" />,
  },
  {
    path: '/error',
    element: <Error />,
  },
];

export default routes;