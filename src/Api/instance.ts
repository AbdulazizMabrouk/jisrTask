// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.sampleapis.com/', // replace with your API base URL
  timeout: 10000, // optional timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for request and response handling
axiosInstance.interceptors.request.use(
  config => {
    // Modify request configuration before sending
    return config;
  },
  error => {
    // Handle request error
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle response error
    return Promise.reject(error);
  },
);

export default axiosInstance;
