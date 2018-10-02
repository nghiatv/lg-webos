import { call, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import Services from '../api';

function* categoryAPI(action) {
  try {
    const response = yield call(Services.categoryAPI.category, action.payload);
    if (response.data && response.data.code === 0) {
      yield put({ type: ACTION_TYPES.GET_CATEGORY_COMPLETED, payload: response.data.data });
    } else {
      yield put({ type: ACTION_TYPES.GET_CATEGORY_FAILED, payload: response.data.data })
    }
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_CATEGORY_ERROR, message: error });
  }
}


const categorySagas = function* () {
  yield takeEvery(ACTION_TYPES.GET_CATEGORY_REQUESTED, categoryAPI);
};

export default categorySagas;
