import request from '@/utils/request';

export function Login(data = {}) {
  return request({
    url: '/login',
    data,
    method: 'POST',
  });
}

export function CheckSession(data = {}) {
  return request({
    url: '/checkSession',
    data,
    method: 'POST',
  });
}
