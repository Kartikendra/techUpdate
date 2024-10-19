
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchData() {
  const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts'); 
  const data = yield response.json();
  console.log(data)
  yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
}

function* exampleSaga() {
  yield takeEvery('FETCH_DATA', fetchData);
}

export default exampleSaga;
