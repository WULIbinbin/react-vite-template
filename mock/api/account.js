export default [
  {
    url: '/api/login',
    method: 'post',
    response: (resp) => {
      let guid = '';
      for (let i = 1; i <= 32; i++) {
        const n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
      }
      console.log('token: ' + guid);
      return {
        code: 0,
        msg: 'login',
        data: {
          token: guid,
        },
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
