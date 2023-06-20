import axios from 'axios';
import { FixMeLater } from '../vite-env';

const domain = 'https://banana-sensei-production-b2aa.up.railway.app';

function getListTopTeacher() {
  const response = axios.get(`${domain}/api/teachers/top`);
  return response;
}

function getListNewTeacher() {
  const response = axios.get(`${domain}/api/teachers/new`);
  return response;
}

function searchTeacher(data?: FixMeLater) {
  const response = axios.get(`${domain}/api/teachers/search`, {
    params: data,
  });
  return response;
}

function getListStudents(data?: FixMeLater) {
  const response = axios.get(`${domain}/api/teachers/students`, {
    params: data,
  });
  return response;
}

function getTeacherDetail(_id: string) {
  const response = axios.get(`${domain}/api/teachers/${_id}`);
  return response;
}

export { getListNewTeacher, getListTopTeacher, getTeacherDetail, searchTeacher, getListStudents };
