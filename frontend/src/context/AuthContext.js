import React from 'react';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token);
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
