import { createBrowserRouter } from 'react-router-dom';

import { App, Error } from 'App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>
  },
]);
