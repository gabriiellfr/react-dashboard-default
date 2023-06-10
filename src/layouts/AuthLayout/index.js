// AuthLayout.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Link, Typography, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ErrorBoundary from '../../components/Common/ErrorBoundary';

import useStyles from './AuthLayout.styles';

const AuthLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className={classes.logo}>
              <LockOutlinedIcon />
              <Typography component="h1" variant="h5">
                App Name
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <ErrorBoundary>{children}</ErrorBoundary>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link component={RouterLink} to="/dashboard">
                Go to Dashboard
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AuthLayout;
