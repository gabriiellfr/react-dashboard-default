import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './providers';
import { AppRoutes } from './routes';
import { GlobalStyles, ThemeProvider } from './styles';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyles />
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
