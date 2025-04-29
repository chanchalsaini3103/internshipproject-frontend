// src/services/authService.js
import axios from '../services/axios'; // ✅ use your custom axios instance!

const API_URL = "/api/auth"; // ✅ Relative URL, since baseURL is set in axios.js

// User Registration
export const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

// User Login
export const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

// Forgot Password
export const forgotPassword = (email) => {
  return axios.post(`${API_URL}/forgot-password`, null, { params: { email } });
};

// Reset Password
export const resetPassword = (token, newPassword) => {
  return axios.post(`${API_URL}/reset-password`, null, { params: { token, newPassword } });
};
