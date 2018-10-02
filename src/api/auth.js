import axios from 'axios';
import { BASE_API_URL } from './base';

export default {
  login: async payload => {
    try {
      const response = await axios.post(`${BASE_API_URL}/screen-menu`, { payload })
      return response
    } catch (e) {
      return e
    }
  },
};
