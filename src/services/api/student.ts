import publicApi from '../config/publicApi.config';

export const getStudentDetail = (id: number | string) =>
  publicApi({
    method: 'GET',
    url: `/students/${id}`,
  });
