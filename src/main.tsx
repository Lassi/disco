import {
  AppBar,
  Box,
  Divider,
  Stack,
  Toolbar,
  Typography,
}from '@mui/material';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <Box>
    <AppBar component="nav" position="sticky">
      <Toolbar>
        <Typography variant="h6">Disco</Typography>
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
