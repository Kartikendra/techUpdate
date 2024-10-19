// src/store/sagas/index.js
import { all } from 'redux-saga/effects';
import exampleSaga from './exampleSaga';

function* rootSaga() {
  yield all([exampleSaga()]);
}

export default rootSaga;
