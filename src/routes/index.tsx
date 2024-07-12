import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../page/Register';
import Login from '../page/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

export default router;