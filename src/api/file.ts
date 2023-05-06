import axios from 'axios';


export function uploadFile(data: any) {
  return axios.post<any>('/api/file/upload', data);
}

export function logout() {
  return axios.post<any>('/api/user/logout');
}