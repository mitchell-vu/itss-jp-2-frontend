import { FixMeLater } from '../../vite-env';
import authApi from '../config/authApi.config';
import publicApi from '../config/publicApi.config';

export const getStudentDetail = (id: number | string) =>
  publicApi({
    method: 'GET',
    url: `/students/${id}`,
  });

export const editStudentInfo = (data: FixMeLater) =>
  authApi({
    method: 'PUT',
    url: `auth/students`,
    data,
  });

export const getStudentRequests = () =>
  authApi({
    method: 'GET',
    url: `auth/students/requests`,
  });
