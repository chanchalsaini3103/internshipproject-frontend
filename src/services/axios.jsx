// src/services/axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mis-backendsystem-production.up.railway.app', // your live Railway backend
  withCredentials: true, // for session or token-based auth
});

export default instance;
