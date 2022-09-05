export function mockObj({ url = '', method = 'get', code = '0', msg = 'ok', data = null }) {
  return {
    url,
    method,
    response: () => {
      return {
        code,
        msg,
        data,
      };
    },
  };
}
