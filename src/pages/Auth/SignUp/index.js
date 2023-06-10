// SignUpPage.js
import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Grid,
    Link
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const SignUpPage = () => {
    return (
        <>
            <Container maxWidth="xs">
                <Typography component="h2" variant="h6" align="center">
                    Sign up
                </Typography>
                <Box mt={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Full Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                mt={2}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" align="center">
                                Or sign up with
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<GoogleIcon />}
                                    mx={1}
                                >
                                    Google
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<GoogleIcon />}
                                    mx={1}
                                >
                                    Microsoft
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                {"Have an account? "}
                                <Link component={RouterLink} to="/signin">
                                    Sign In
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default SignUpPage;
