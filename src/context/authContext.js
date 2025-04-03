import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser)); // 👈 make sure it's parsed!
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
        setUser(null);
        setIsAuthenticated(false);
      }
    }
  }, []);

  const signup = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        password,
      });
      return { success: true, message: res.data.message };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Server error",
      };
    }
  };

  const login = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      if (!res.data) throw new Error("No data received from server");

      localStorage.setItem("authToken", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user)); // ✅ Store as object

      setUser(res.data.user);
      setIsAuthenticated(true);

      return { success: true, message: "Login successful!" };
    } catch (err) {
      console.error(
        "Login Error:",
        err.response ? err.response.data : err.message
      );
      return {
        success: false,
        message: err.response?.data?.message || "Server error",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
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
