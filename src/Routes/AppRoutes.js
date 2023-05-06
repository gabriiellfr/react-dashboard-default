// src/Routes.js
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Dashboard, Settings } from '../Pages';
import { ErrorBoundary, Loading } from '../Components';

const AppRoutes = () => (
    <ErrorBoundary>
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Suspense>
    </ErrorBoundary>
);

export default AppRoutes;
