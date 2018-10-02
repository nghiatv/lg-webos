import ACTION_TYPES from './types';

export default {
  loadCategory: (payload) => ({ type: ACTION_TYPES.GET_CATEGORY_REQUESTED, payload }),
};
