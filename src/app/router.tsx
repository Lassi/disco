import { createBrowserRouter } from 'react-router-dom';

import { App, Error } from 'main';
import { ArtworkDetails } from 'features/artwork-details/artwork-details';
import { ArtworkGallery } from 'features/artwork-gallery/artwork-gallery';
import { Home } from 'features/home/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'artworks',
        element: <ArtworkGallery/>
      },
      {
        path: 'artworks/:id',
        element: <ArtworkDetails/>
      },
    ],
  },
]);
