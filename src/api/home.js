import instance from './base';

export default {
  home: async () => {
    try {
      const response = await instance.get(`/nav-menu`)
      return response
    } catch (e) {
      return e
    }
  }
};
