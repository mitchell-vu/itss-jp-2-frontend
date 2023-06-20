import axios from 'axios';
import token from '../../utils/token';
import baseUrl from './baseUrl';

const authApi = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

authApi.interceptors.request.use(
  (config) => {
    if (token.getAccessToken()) {
      config.headers.Authorization = `Bearer ${token.getAccessToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
      token.removeAccessToken();
      window.location.href = '/auth/sign-in';
      return Promise.reject(error);
    }

    if (error.response.status === 403 && error.response.statusText === 'Forbidden') {
      alert('Your permissions have been changed, please reload the page');
      window.location.href = '/';
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default authApi;
