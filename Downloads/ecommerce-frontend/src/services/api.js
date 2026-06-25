import axios from 'axios';

const BASE_URL = 'http://localhost:9999';

// Token localStorage se lo
const getToken = () => localStorage.getItem('token');

// Axios instance — har request mein token automatically jayega
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Har request mein token add karo automatically
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// AUTH APIs
export const register = (email, password) =>
  axios.post(`${BASE_URL}/auth/register?email=${email}&password=${password}`);

export const login = (email, password) =>
  axios.post(`${BASE_URL}/auth/login?email=${email}&password=${password}`);

// PRODUCT APIs
export const getProducts = () => api.get('/products');
export const addProduct = (product) => api.post('/products', product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// CART APIs
export const addToCart = (userId, productId, quantity) =>
  api.post(`/cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`);
export const getCart = (userId) => api.get(`/cart/${userId}`);
export const removeFromCart = (cartId) => api.delete(`/cart/remove/${cartId}`);

// ORDER APIs
export const placeOrder = (userId, productId, quantity) =>
  api.post(`/orders/place?userId=${userId}&productId=${productId}&quantity=${quantity}`);
export const getOrders = (userId) => api.get(`/orders/${userId}`);
export const updateOrderStatus = (orderId, status) =>
  api.put(`/orders/${orderId}/status?status=${status}`);