import { call, put, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import Services from '../api';

function* homeAPI() {
  try {
    const response = yield call(Services.homeAPI.home);
    if (response.data && response.data.code === 0) {
      yield put({ type: ACTION_TYPES.GET_SCREEN_MENU_COMPLETED, payload: response.data.data });
    } else {
      yield put({ type: ACTION_TYPES.GET_SCREEN_MENU_FAILED, payload: response.data.data })
    }
  } catch (error) {
    yield put({ type: ACTION_TYPES.GET_SCREEN_ERROR, message: error });
  }
}


const homeSagas = function* () {
  yield takeEvery(ACTION_TYPES.GET_SCREEN_MENU_REQUESTED, homeAPI);
};

export default homeSagas;
