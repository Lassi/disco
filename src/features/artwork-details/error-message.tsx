import { Alert, Typography } from "@mui/material";

export const ErrorMessage = () => (
  <Alert color="error">
    <Typography>An error occured and we couldn't fetch the artwork's details.</Typography>
    <Typography>Please let us know if this persists!</Typography>
  </Alert>
);
