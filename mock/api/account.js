export default [
  {
    url: '/api/login',
    method: 'post',
    response: (resp) => {
      return {
        code: 0,
        msg: 'login',
        data: null,
      };
    },
  },
  {
    url: '/api/checkSession',
    method: 'post',
    response: (resp) => {
      return {
        code: 0,
        msg: 'ok',
        data: '1234567890',
      };
    },
  },
];
