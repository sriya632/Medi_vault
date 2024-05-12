import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [ethereumAccount, setEthereumAccount] = useState(null);

  const login = (account) => {
    setIsAuthenticated(true);
    setEthereumAccount(account); // Set the connected Ethereum account on login
  };

  const register = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setEthereumAccount(null); // Clear the Ethereum account on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, ethereumAccount, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};