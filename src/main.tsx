import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <Box>
    <AppBar component="nav" position="static">
      <Toolbar>
        <Typography variant="h6">Disco</Typography>
      </Toolbar>
    </AppBar>
    <Box component="main" p={3}>
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
