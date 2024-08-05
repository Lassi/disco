import {
  AppBar,
  Box,
  Divider,
  Stack,
  Toolbar,
  Typography,
}from '@mui/material';
import { routes } from 'app/routes';
import { RoutedLink } from 'lib/routed-link/routed-link';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <Box>
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <RoutedLink to={routes.home()}>
          <Typography variant="h6">Disco</Typography>
        </RoutedLink>
      </Toolbar>
    </AppBar>
    <Box component="main">
      <Outlet/>
    </Box>
  </Box>
);

export const Error = () => (
  <Box
    alignItems="center"
    display="flex"
    height="100vh"
    justifyContent="center"
  >
    <Stack
      alignItems="center"
      direction="row"
      spacing={3}
    >
      <Typography variant="h3">404</Typography>
      <Divider orientation='vertical' flexItem/>
      <Typography>This page could not be found</Typography>
    </Stack>
  </Box>
);
