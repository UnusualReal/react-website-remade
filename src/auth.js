import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';  


export const signup = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}signup`, { username, password });
    return response.data; 
  } catch (error) {
    console.error('Error signing up:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};


export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { username, password });

    
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};


export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};
