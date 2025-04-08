import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
        setUser(null);
        setIsAuthenticated(false);
      }
    }
  }, []);

  const signup = async (username, email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password,
      });

      const { token, username: resUsername, email: resEmail } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ username: resUsername, email: resEmail }));

      setUser({ username: resUsername, email: resEmail });
      setIsAuthenticated(true);

      return { success: true, message: "Signup successful!" };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Signup failed",
      };
    }
  };

  const login = async (identifier, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        identifier,
        password,
      });

      const { token, username, email } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ username, email }));

      setUser({ username, email });
      setIsAuthenticated(true);

      return { success: true, message: "Login successful!" };
    } catch (err) {
      console.error(
        "Login Error:",
        err.response ? err.response.data : err.message
      );
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
