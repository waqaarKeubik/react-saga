import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import api from './../apis/company'

function* addCompany (data) {
  try {
    yield put({type: 'REQUEST_ADD_COMPANY'})
    let result = yield api.company.add(data);
    yield put({type: 'SUCCESS_ADD_COMPANY', data: result});
  } catch(error) {
    yield put({type: 'FAILED_ADD_COMPANY', data: error.response})
  }
}

function* getCompanies () {
  try {
    yield put({type: 'REQUEST_FETCH_COMPANIES'})
    let result = yield api.company.getList();
    yield put({type: 'SUCCESS_FETCH_COMPANIES', data: result})
  } catch (error) {
    yield put({type: 'FAILED_FETCH_COMPANIES', data: error.response})
  }
}

export const companySaga = [
  takeLatest('ADD_COMPANY', addCompany),
  takeEvery('GET_COMPANIES', getCompanies)
];