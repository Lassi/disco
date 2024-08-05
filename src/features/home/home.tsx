import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

export const Home = () => (
  <Typography>
    Hello, Disco!
    Have a look at the <Link component={RouterLink} to="artworks">gallery</Link>
  </Typography>
);
