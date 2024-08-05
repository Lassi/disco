import { Link as MuiLink } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

type RoutedLinkProps = {
  children: React.ReactNode;
  to: string;
  variant?: 'visible' | 'subtle';
};

export const RoutedLink = ({
  children,
  to,
  variant = 'subtle',
}: RoutedLinkProps) => (
  <MuiLink
    component={ReactRouterLink}
    to={to}
    color={variant === 'subtle' ? "inherit" : undefined}
    underline={variant === 'subtle' ? "hover" : undefined}
  >
    {children}
  </MuiLink>
);
