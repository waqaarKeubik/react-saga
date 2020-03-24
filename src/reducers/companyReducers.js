// import {LOGGED_IN_USER} from './../../types.js'
let initialState = {
  form: {
    company_information: {
      company_name: '',
      company_logo: {}
    },
    contact_information: {
      email: '',
      contact_number: '',
      secondary_number: '',
      authorized_contact: ''
    },
    bank_details: {
      account_number: '',
      bank_name: '',
      ifsc_code: '',
      branch_name: ''
    },
    mailing_address: {
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      zip_code: ''
    },
    errors: []
  },
  loading: false,
  companies: [],
  error: ''
};

export default function User (state = initialState, action = {}){
  switch(action.type){

    // Add company
    case 'HANDLE_INPUT_CHANGE':
      console.log(action.data)
      const { key , target} = action.data;
      const { name, value} = target;

      return {
        ...state,
        form: {
          ...state.form,
          [key]: {
            ...state.form[key],
            [name]: value
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

    case 'INPUT_FILE':
      console.log(action.data)
      return state;

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
