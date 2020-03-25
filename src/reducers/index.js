import { combineReducers } from 'redux';
import Company from './companyReducers/index';
import Mall from './mallReducers';

export default combineReducers({
  Company,
  Mall
});
