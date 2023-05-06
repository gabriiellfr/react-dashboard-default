import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppLayout from './Organisms/Layouts/App';

import { Dashboard, Settings } from './Pages';

const App = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppLayout>
  </Router>
);

export default App;