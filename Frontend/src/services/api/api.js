import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

// Antes de toda requisição, coloca o token salvo no login no header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;