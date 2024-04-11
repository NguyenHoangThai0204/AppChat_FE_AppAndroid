import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/messages',
});

// Interceptor để tự động thêm token JWT vào yêu cầu
api.interceptors.request.use(
  (config) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api; 