import { FixMeLater } from '../../vite-env';
import publicApi from '../config/publicApi.config';

export const sendCommentAndRate = (data: FixMeLater) =>
  publicApi({
    method: 'POST',
    url: '/auth/comments',
    data,
  });
