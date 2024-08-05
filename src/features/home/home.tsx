import Typography from '@mui/material/Typography';
import { routes } from 'app/routes';

import { RoutedLink } from 'lib/routed-link/routed-link';

export const Home = () => (
  <Typography>
    Hello, Disco!
    Have a look at the <RoutedLink to={routes.artworkGallery()} variant="visible">gallery</RoutedLink>
  </Typography>
);
