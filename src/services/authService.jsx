import axios from 'axios';

// ✅ API URL - Replace with your Render backend URL
const API_URL = "https://internshipproject-backend.onrender.com/api/auth";

// User Registration
export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

// User Login
export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
