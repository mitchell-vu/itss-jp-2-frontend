import { FixMeLater } from '../../vite-env';
import authApi from '../config/authApi.config';

export const sendRequest = (data: FixMeLater) =>
  authApi({
    method: 'POST',
    url: '/auth/requests',
    data,
  });
