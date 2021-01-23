export const SERVER_BASE_URL = (() => {
  console.log(process.env.REACT_APP_MODE);
  if (process.env.REACT_APP_MODE === 'local') return 'http://127.0.0.1:8000/api/v1';
  if (process.env.REACT_APP_MODE === 'dev') return 'https://dev-api.landcorp.io/api/v1';
  if (process.env.REACT_APP_MODE === 'prod') return 'http://api.landcorp.io/api/v1';
})();
