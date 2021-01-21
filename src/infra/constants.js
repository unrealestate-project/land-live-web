export const SERVER_BASE_URL =
  process.env.REACT_APP_MODE === 'dev'
    ? 'http://127.0.0.1:8000/api/v1'
    : 'https://dev-dot-landproject-300105.du.r.appspot.com/api/v1';
