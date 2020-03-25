export const InputStringAction = (object) => {
  return {
    type: 'INPUT_STRING',
    object
  }
}

export const addCompanyAction = (data) => {
  return {
    type: 'ADD_COMPANY',
    data
  }
}

export const companiesListAction = () => {
  return {
    type: 'GET_COMPANIES'
  }
}