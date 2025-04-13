import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const ProtectedRoute = () => {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
