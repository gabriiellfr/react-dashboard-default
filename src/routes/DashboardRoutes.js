import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { DrawerProvider, useAuth } from '../providers';

import { DashboardLayout } from '../layouts';

const DashboardPage = () => <>DashboardPage</>
const SettingsPage = () => <>SettingsPage</>

const DashboardRoutes = () => {
    const { authenticated } = useAuth();

    return authenticated ? (
        <DrawerProvider>
            <DashboardLayout>
                <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </DashboardLayout>
        </DrawerProvider>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default DashboardRoutes;
