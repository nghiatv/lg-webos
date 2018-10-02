
import axios from 'axios';
export const BASE_API_URL = 'https://apiv2.vtvplay.vn/v1'

const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 2500,
});

instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (config.params) {
    config.params = Object.assign({}, config.params, { platform: 'VTVCab_ON_Pro' });
  } else {
    config.params = { platform: 'VTVCab_ON_Pro' };
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


export default instance

