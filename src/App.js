import React from 'react';

import { AuthProvider } from './providers';
import { AppRoutes } from './routes';
import { GlobalStyles, ThemeProvider } from './styles';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
