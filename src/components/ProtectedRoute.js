import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  const storedToken = localStorage.getItem("authToken"); // Check for stored token

  if (!isAuthenticated && !storedToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
