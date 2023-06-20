import publicApi from '../config/publicApi.config';

export const loginWithEmail = (data: { username: string; password: string }) =>
  publicApi({
    method: 'POST',
    url: '/auth/login',
    data,
  });
