// import {LOGGED_IN_USER} from './../../types.js'
import { formInitialState } from './initial_state' 
let initialState = {
  form: formInitialState,
  loading: false,
  companies: [],
  error: ''
};

export default function User (state = initialState, action = {}){
  switch(action.type){

    // Add company
    case 'HANDLE_INPUT_CHANGE':
      const { key , target} = action.data;
      const { name, value} = target;

      return {
        ...state,
        form: {
          ...state.form,
          [key]: {
            ...state.form[key],
            [name]: {
              ...state.form[key][name],
              input_val: value
            }
          }
        }
      };

    case 'HANDLE_ERROR_CHANGE':
      if (!action.data.error) {
        return {
          ...state,
          form: {
            ...state.form,
            errors: state.form.errors.filter(error => error.key !== action.data.name)
          }
        }
      } else {
        let indexIs = state.form.errors.findIndex(error => {
          return error.key === action.data.name
        });
        if (indexIs > -1) {
          return {
            ...state,
            form: {
              ...state.form,
              errors: [...state.form.errors.filter(error => error.key !== action.data.name), action.data.error]
            }
          }
        } else {
          return {
            ...state,
            form: {
              ...state.form,
              errors: [...state.form.errors, action.data.error]
            }
          }
        }
      }
    
    case 'REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'COMPLETE':
      return {
        ...state,
        loading: false
      };

    case 'FAILED_ADD_COMPANY':
      return {
        ...state,
        form: {
          ...state.form,
          errors: action.data
        }
      }

    case 'SUCCESS_FETCH_COMPANIES':
      return {
        ...state,
        companies: action.data,
        loading: false
      };

    case 'FAILED_FAILED_COMPANIES':
      return {
        ...state,
        loading: false,
        error: action.data
      }

    default:
      return state;
  }
}

