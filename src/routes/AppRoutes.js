// AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { authRoutes } from './routeConfigs';

const AppRoutes = () => {
    const allRoutes = [...authRoutes];

    return (
        <Router>
            <Routes>
                {allRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.layout>{route.component}</route.layout>}
                    />
                ))}
                <Route path="*" element={<Navigate to="/auth/signin" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
