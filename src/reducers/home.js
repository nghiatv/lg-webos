import ACTION_TYPES from '../actions/types';
// import _ from 'lodash';


const initialState = {
  home: {}
}
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_SCREEN_MENU_COMPLETED:
      return Object.assign({}, state, {
        home: action.payload
      })
    default:
      return state;
  }
};

export default HomeReducer