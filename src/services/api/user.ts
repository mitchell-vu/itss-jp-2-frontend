import authApi from '../config/authApi.config';

export const getAllUser = () =>
  authApi({
    method: 'GET',
    url: 'auth/users/all',
  });
