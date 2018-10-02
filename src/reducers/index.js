import { combineReducers } from 'redux'
import HomeReducer from './home'
import CategoryReducer from './category'
function path(state = '/home', action) {
  switch (action.type) {
    case 'NAVIGATE':
      return action.path;
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  path,
  HomeReducer,
  CategoryReducer
})

export default rootReducer