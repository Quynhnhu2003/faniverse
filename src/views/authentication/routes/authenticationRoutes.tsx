// ** Components Imports
import { HomeRoutePaths } from '../utils/enum/home';
import Authentication from '../pages/Authentication';
import LayoutAuthen from '../utils/components/layout';

// ** Another Imports
import { RouteObject } from 'react-router-dom';

const authenticationRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LayoutAuthen />,
    children: [
      {
        path: HomeRoutePaths.HOME,
        element: <Authentication />,
      },
    ],
  },
];

export default authenticationRoutes;
