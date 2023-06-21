import { FixMeLater } from '../../vite-env';
import authApi from '../config/authApi.config';

export const sendCommentAndRate = (data: FixMeLater) =>
  authApi({
    method: 'POST',
    url: '/auth/comments',
    data,
  });
