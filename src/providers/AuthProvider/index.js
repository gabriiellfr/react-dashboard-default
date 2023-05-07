import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(true);

    const login = () => {
        console.log("login")
        setAuthenticated(true);
    };

    const logout = () => {
        console.log("logout")
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if (context === undefined)
        throw new Error('useAuth must be used within an AuthProvider');

    return context;
};
