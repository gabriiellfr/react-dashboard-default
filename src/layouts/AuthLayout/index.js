import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ErrorBoundary from '../../components/Common/ErrorBoundary';

import useStyles from './AuthLayout.styles';

const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <Box className={classes.logo}>
          <LockOutlinedIcon />
          <Typography component="h1" variant="h5">
            App Name
          </Typography>
        </Box>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Box mt={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Don't have an account? "}
            <Link component={RouterLink} to="/signup">
              Sign Up
            </Link>
            <br />
            <Link component={RouterLink} to="/dashboard">
              Go to Dashboard
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
