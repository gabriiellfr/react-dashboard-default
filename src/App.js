// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './Organisms/Layouts/App';
import { DrawerProvider } from './Providers/DrawerProvider';

import AppRoutes from './Routes/AppRoutes';

const App = () => (
  <Router>
    <DrawerProvider>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </DrawerProvider>
  </Router>
);

export default App;