import { combineReducers } from 'redux';
import Company from './companyReducers';
import Mall from './mallReducers';

export default combineReducers({
  Company,
  Mall
});
