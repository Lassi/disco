import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <Box>
      <AppBar component="nav" position="static">
        <Toolbar>
          <Typography variant="h6">Disco</Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" p={3}>
        Hello, Disco!
      </Box>
    </Box>
  );
}

export default App;
