import { Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink, Navigate, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '../layouts';
import { useAuth } from '../providers';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h1>SigninPage</h1>
      <button onClick={login}>Sign In</button>
    </div>
  );
};

const SignupPage = () => {
  return (
    <div>
      <h1>SignupPage</h1>
      <Link component={RouterLink} to="/login">
        Sign In
      </Link>
    </div>
  );
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <AuthLayout>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </AuthLayout>
        }
      />
    </Routes>
  );
};

export default AuthRoutes;