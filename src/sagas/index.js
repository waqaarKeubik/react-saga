import { all } from 'redux-saga/effects';
import { mallSaga } from './mallSaga';
import { companySaga } from './companySaga';

/**
 * saga to yield all others
 */
export default function* rootSaga() {
  console.log('REGISTERING ALL SAGA WATCHERS');
  yield all([
    ...mallSaga,
    ...companySaga
  ]);
}