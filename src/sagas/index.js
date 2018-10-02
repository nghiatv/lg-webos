import homeSagas from './home'
import categorySagas from './category'
import { all } from 'redux-saga/effects';

const satagatata = function* satagatata() {
  yield all([
    homeSagas(),
    categorySagas()
  ]);
};
export default satagatata;
