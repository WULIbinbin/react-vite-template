import axios from 'axios';

const TIMEOUT = 5000;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SUCCESS_CODE = 0;

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: TIMEOUT,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    console.log(response);
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
