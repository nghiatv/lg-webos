import ACTION_TYPES from '../actions/types';
// import _ from 'lodash';


const initialState = {
  data: {},
  activeIndex: 0
}
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CATEGORY_COMPLETED:
      return Object.assign({}, state, {
        data: action.payload
      })
    case ACTION_TYPES.CHANGE_CATEGORY_ACTIVE_INDEX:
      return Object.assign({}, state, {
        activeIndex: action.payload
      })
    default:
      return state;
  }
};

export default CategoryReducer