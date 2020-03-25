import { takeLatest, takeEvery, put, select } from 'redux-saga/effects';
import { stringValidation, numberValidation, emailValidation, imageValidation } from './../utils/inputValidations';
import { validateFinally } from './../utils/inputValidations';
import api from './../apis/company'

function* handleInputString ({object}) {
  const { target, initialState, key } = object;
  const { required, condition, type } = initialState;
  const { min, max }  = condition;
  const { name } = target;
  yield put({type: 'HANDLE_INPUT_CHANGE', data: object});
  let state = yield select();
  let input_val = state.Company.form[key][name].input_val
  let error = {};
  if (type.name === 'String') {
    error = yield stringValidation(name, input_val , required, min, max);
  } else if (type.name === 'Number') {
    error = yield numberValidation(name, input_val, required, min, max);
  } else if (type.name === 'Email') {
    error = yield emailValidation(name, input_val, required)
  } else if (type.name === 'File') {
    error = yield imageValidation(name, input_val, required)
  }
  yield put({type: 'HANDLE_ERROR_CHANGE', data: {error, name}})
}

function* addCompany (data) {
  try {
    yield put({type: 'REQUEST'})
    yield validateFinally(data.data);
    console.log('api call now');
  } catch(error) {
    yield put({type: 'FAILED_ADD_COMPANY', data: error})
  }
}

function* getCompanies () {
  try {
    yield put({type: 'REQUEST'})
    let result = yield api.company.getList();
    yield put({type: 'SUCCESS_FETCH_COMPANIES', data: result})
    yield put({type: 'COMPLETE'})
  } catch (error) {
    yield put({type: 'FAILED_FETCH_COMPANIES', data: error.response})
    yield put({type: 'COMPLETE'})
  }
}


export const companySaga = [
  takeLatest('INPUT_STRING', handleInputString),
  takeEvery('ADD_COMPANY', addCompany),
  takeEvery('GET_COMPANIES', getCompanies)
];