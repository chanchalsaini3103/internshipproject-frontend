import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mis-backendsystem.onrender.com', // ✅ Render backend URL
  withCredentials: true
});

export default instance;
