export function login() {
  return {
    url: '/api/login',
    method: 'post',
    response: (resp) => {
      console.log(resp);
      return {
        code: 0,
        msg: 'login',
        data: null,
      };
    },
  };
}
