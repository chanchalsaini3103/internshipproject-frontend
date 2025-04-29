// // src/services/axios.js
// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://internshipproject-backend.onrender.com", // ✅ Your Render backend
//   withCredentials: true, // optional if you are sending cookies
// });

// export default instance;
// src/services/axios.jsx
import axios from 'axios';

export default axios.create({
  baseURL: 'https://internshipproject-backend.onrender.com/api',
});