export const SERVER_BASE_URL =
  process.env.REACT_APP_MODE === 'dev'
    ? 'http://127.0.0.1:8000/api/v1'
    : 'http://land-liveplus-backend-dev.ap-northeast-2.elasticbeanstalk.com/api/v1';
