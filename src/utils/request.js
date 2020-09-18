import axios from 'axios';
import { baseUrl, URL } from './config';


const config = {
  baseURL: baseUrl,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus(status) {
    if (status === 500) {
   
    }
    return status < 500;
  },
};

const instance = axios.create(config);

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    if (
      response.data !== undefined &&
      response.data.code !== undefined &&
      !(response.data.code !== 200 || response.data.code !== 0)
    ) {
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

const _POST = (url = '', data = {}, loading = true) => {
 console.log(url,'url')
  return instance
    .post(URL[url] || url, data, {
    })
    .then(res => res.data)
    .catch(e => {
    }).finally(() => { });
};

export { _POST};
