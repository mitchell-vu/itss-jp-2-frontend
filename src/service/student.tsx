import axios from 'axios';

const domain = 'https://banana-sensei-production-b2aa.up.railway.app';

function getStudentDetail(_id: string) {
  const response = axios.get(`${domain}/api/students/${_id}`);
  return response;
}

export { getStudentDetail };
