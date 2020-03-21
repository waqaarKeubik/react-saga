import { takeEvery, put } from 'redux-saga/effects';
import api from './../apis/mall'

function* getMalls () {
  try {
    yield put({type: 'REQUEST_FETCH_MALLS'});
    let result = yield api.mall.getList();
    yield put({type: 'SUCCESS_FETCH_MALLS', data: result});
  } catch (error) {
    yield put({type: 'FAILED_FETCH_MALLS', data: error.response});
  }
}

export const mallSaga = [
  takeEvery('GET_MALLS', getMalls)
];