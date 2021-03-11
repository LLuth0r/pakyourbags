import api from './apiConfig';

// Function to login a user
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { authentication: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

// Function to register a user
export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorazation = `Bearer ${resp.data.token}`;
  return resp.data.user;
};

// Function to verify a user when logging back in
export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return null
}

// Function to log out a user by setting their token equal to null
export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}