import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        setIsAuthenticated(true);  // Set to true explicitly on successful login
        console.log("Login called, isAuthenticated set to true");
    };

    const logout = () => {
        localStorage.removeItem('userData');
        setIsAuthenticated(false);  // Set to false on logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
