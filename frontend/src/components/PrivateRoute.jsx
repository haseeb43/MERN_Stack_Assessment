import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, roleRequired }) => {
  const { user } = useContext(AuthContext);

  if (!user || (roleRequired && user.role !== roleRequired)) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
