import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
