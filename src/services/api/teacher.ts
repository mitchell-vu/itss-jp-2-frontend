import { FixMeLater } from '../../vite-env';
import publicApi from '../config/publicApi.config';

export const getListTopTeacher = () =>
  publicApi({
    method: 'GET',
    url: '/teachers/top',
  });

export const getListNewTeacher = () =>
  publicApi({
    method: 'GET',
    url: '/teachers/new',
  });

export const searchTeacher = (params?: FixMeLater) =>
  publicApi({
    method: 'GET',
    url: '/teachers/search',
    params,
  });

export const getListStudents = (params?: FixMeLater) =>
  publicApi({
    method: 'GET',
    url: `/teachers/${23}/students`,
    params,
  });

export const getTeacherDetail = (id: string) =>
  publicApi({
    method: 'GET',
    url: `/teachers/${id}`,
  });
