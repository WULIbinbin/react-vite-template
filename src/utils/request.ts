import axios from 'axios';
import host from '@/configs/host';

const ENV = 'MOCK';
const TIMEOUT = 5000;
const BASE_URL = host[ENV].baseUrl;
const SUCCESS_CODE = 0;

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: TIMEOUT,
});

// 请求拦截器
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status === 200) {
      if (data.code === SUCCESS_CODE) {
        return data;
      }
    }
    return Promise.reject(response);
  },
  (error) => Promise.reject(error),
);

export default instance;
