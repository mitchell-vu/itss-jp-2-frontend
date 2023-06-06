import axios from "axios";

const domain = "https://banana-sensei-production-b2aa.up.railway.app";


function getListTopTeacher() {
  const response = axios.get(`${domain}/api/teachers/top`);
  return response;
}

function getListNewTeacher() {
    const response = axios.get(`${domain}/api/teachers/new`);
    return response;
  }
  

function searchTeacher(data: {}) {
    const response = axios.get(`${domain}/api/teachers/search`, {
      params: data,
    });
    return response;
  }

function getTeacherDetail(_id:string){
    const response = axios.get(`${domain}/api/teachers/${_id}`);
    return response;
}

export {
    getListTopTeacher,
    getListNewTeacher,
    searchTeacher,
    getTeacherDetail
};
