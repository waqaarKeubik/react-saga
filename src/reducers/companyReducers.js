// import {LOGGED_IN_USER} from './../../types.js'
let initialState = {
  loading: false,
  companies: [],
  error: ''
};

export default function User (state = initialState, action = {}){
  switch(action.type){

    case 'REQUEST_FETCH_COMPANIES':
      return {
        ...state,
        loading: true
      };

    case 'SUCCESS_FETCH_COMPANIES':
      return {
        ...state,
        companies: action.data,
        loading: false
      };

    case 'FAILED_FETCH_COMPANIES':
        return {
          ...state,
          loading: false,
          error: action.data
        }

    default:
      return state;
  }
}
