import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.50.196:3333',
  // baseURL: 'http://localhost:3333',
});

export default api;
