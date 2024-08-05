import { Box, Typography } from '@mui/material';

import { routes } from 'app/routes';
import { RoutedLink } from 'lib/routed-link/routed-link';

export const Home = () => (
  <Box alignItems="center" display="flex" justifyContent="center" p={8}>
    <Typography>
      Hello, Disco team! 👋🏼
      Have a look at the <RoutedLink to={routes.artworkGallery()} variant="visible">gallery</RoutedLink>
    </Typography>
  </Box>
);
