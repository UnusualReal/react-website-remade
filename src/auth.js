import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';  // Adjust to match your backend URL

// Signup function
export const signup = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}signup`, { username, password });
    return response.data; // You can return any data like tokens from the response
  } catch (error) {
    console.error('Error signing up:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};

// Login function
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { username, password });

    // Store JWT tokens in localStorage
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};

// Optional: Add logout function to clear tokens
export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
