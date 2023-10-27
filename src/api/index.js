import axios from 'axios';
import {baseURL, bearerToken} from '../utils/constants';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = baseURL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const config = {
  headers: {
    Authorization: `Bearer ${bearerToken}`,
  },
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;

export const getRequest = URL => {
  return axiosClient.get(`/${URL}`, config).then(response => response.data);
};

// export function postRequest(URL, payload) {
//   return axiosClient.post(`/${URL}`, payload).then(response => response);
// }

// export function patchRequest(URL, payload) {
//   return axiosClient.patch(`/${URL}`, payload).then(response => response);
// }

// export function deleteRequest(URL) {
//   return axiosClient.delete(`/${URL}`).then(response => response);
// }
