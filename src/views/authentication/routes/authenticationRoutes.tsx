// ** Components Imports
import { AuthenRoutePaths } from '../utils/enum/home';
import LayoutAuthen from '../utils/components/layout';

// ** Another Imports
import Logout from '../pages/Logout';
import LoginForm from '../pages/LoginForm';
import { RouteObject } from 'react-router-dom';
import RegisterForm from '../pages/RegisterForm';

const authenticationRoutes: RouteObject[] = [
  {
    path: '',
    element: <LayoutAuthen />,
    children: [
      {
        path: AuthenRoutePaths.SIGN_IN,
        element: <LoginForm />,
      },
      {
        path: AuthenRoutePaths.REGISTER,
        element: <RegisterForm />,
      },
      {
        path: AuthenRoutePaths.SIGN_OUT,
        element: <Logout />,
      },
    ],
  },
];

export default authenticationRoutes;
