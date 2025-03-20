import React, { createContext, useState, useEffect, useContext } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already authenticated (on page reload)
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    // Simulate an API call with hardcoded credentials (replace with actual logic)
    if (email === "user@example.com" && password === "password123") {
      // Set the user as authenticated
      const user = { email };
      setUser(user);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user"); // Remove from localStorage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuthContext hook
export const useAuthContext = () => useContext(AuthContext);
