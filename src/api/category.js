import instance from './base';

export default {
  category: async (payload) => {
    const { id, page, pageSize } = payload
    console.log(page)
    try {
      const response = await instance.get(`/category/getCategoryById/${id}`, {
        page: page || 1,
        pageSize: pageSize || 24
      })
      return response
    } catch (e) {
      return e
    }
  }
};
