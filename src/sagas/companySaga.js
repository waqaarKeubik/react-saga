import { takeLatest, takeEvery, put, select } from 'redux-saga/effects';
import { stringValidation, numberValidation, emailValidation } from './../utils/inputValidations';
import api from './../apis/company'

function* handleInputString ({object}) {
  const { target, initialState, key } = object;
  const { required, condition, type } = initialState;
  const { min, max }  = condition;
  const { name } = target;
  yield put({type: 'HANDLE_INPUT_CHANGE', data: object});
  let state = yield select();
  let error = {};
  if (type.name === 'String') {
    error = yield stringValidation(name, state.Company.form[key][name], required, min, max);
  } else if (type.name === 'Number') {
    error = yield numberValidation(name, state.Company.form[key][name], required, min, max);
  } else if (type.name === 'Email') {
    error = yield emailValidation(name, state.Company.form[key][name], required)
  } else if (type.name === 'File') {
    console.log('Filw')
  }
  yield put({type: 'HANDLE_ERROR_CHANGE', data: {error, name}})
}

function* handleInputFile ({object}) {
  console.log(yield object);
  yield put({type: 'HANDLE_INPUT_CHANGE', data: object});
  // yield put({type: 'HANDLE_INPUT_CHANGE', data: object});
}

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
  takeEvery('GET_COMPANIES', getCompanies),
  takeEvery('INPUT_STRING', handleInputString),
  takeEvery('INPUT_FILE', handleInputFile)
];