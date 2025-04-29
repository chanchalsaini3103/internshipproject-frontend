// src/services/authService.js (or wherever you're keeping it)
import axios from 'axios';

// ✅ Live backend on Render
const API_URL = "https://internshipproject-backend.onrender.com/api/auth";

// User Registration
export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

// User Login
export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
