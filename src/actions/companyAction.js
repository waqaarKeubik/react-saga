export const InputStringAction = (object) => {
  return {
    type: 'INPUT_STRING',
    object
  }
}

export const InputFileAction = (object) => {
  return {
    type: 'INPUT_FILE',
    object
  }
}

export const companiesListAction = () => {
  return {
    type: 'GET_COMPANIES'
  }
}