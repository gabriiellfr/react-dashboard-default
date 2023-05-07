import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DashboardRoutes, AuthRoutes } from '../routes';

const AppRoutes = () => (
    <Routes>
        <Route path="/*" element={<AuthRoutes />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
    </Routes>
);

export default AppRoutes;