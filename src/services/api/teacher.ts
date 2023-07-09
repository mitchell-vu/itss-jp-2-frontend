import { FixMeLater } from '../../vite-env';
import authApi from '../config/authApi.config';
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

export const getListStudents = (id: number, params?: FixMeLater) =>
  publicApi({
    method: 'GET',
    url: `/teachers/${id}/students`,
    params,
  });

export const getTeacherDetail = (id: string) =>
  publicApi({
    method: 'GET',
    url: `/teachers/${id}`,
  });

export const approveRequest = (id: string, status: 'accepted' | 'cancelled') =>
  authApi({
    method: 'PUT',
    url: `auth/teachers/${id}`,
    data: { status },
  });

export const finishCourse = (id: string) =>
  authApi({
    method: 'POST',
    url: `auth/teachers/${id}/finish-course`,
  });

export const editTeacherInfo = (data: FixMeLater) =>
  authApi({
    method: 'PUT',
    url: `auth/teachers`,
    data,
  });
