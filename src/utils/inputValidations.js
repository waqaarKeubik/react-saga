import {formateKeyName} from './common';
//eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export const stringValidation = async (key, value, required, min, max) => {
  if (value || required) {
    if (required && !value) {
      return {
        key: key,
        msg: `${formateKeyName(key)} is required`
      }
    }
    if (typeof(value) === 'string') {
      if (!(value.length >= min && value.length <= max)) {
        return {
          key: key,
          msg: `${formateKeyName(key)} should be between ${min} and ${max} characters long`
        }
      }
      return '';
    } else {
      return {
        key: key,
        msg: `${formateKeyName(key)} should be a characters`
      }
    }
  } else {
    return '';
  }
}

export const numberValidation = async (key, value, required, min, max) => {
  let number = value ? Number(value) : '';
  if (number || required) {
    if (required && !number) {
      return {
        key: key,
        msg: `${formateKeyName(key)} is required`
      }
    }
    if (typeof(number) === 'number') {
      let data = number;
      if (!(data.toString().length >= min && data.toString().length <= max)) {
        if (min === max) {
          return {
            key: key,
            msg: `${formateKeyName(key)} should be ${min} digits long`
          }
        }
        return {
          key: key,
          msg: `${formateKeyName(key)} should be between ${min} and ${max} digits long`
        }
      }
      return '';
    } else {
      return {
        key: key,
        msg: `${formateKeyName(key)} should be a number`
      }
    }
  } else {
    return '';
  }
}

export const emailValidation = (key, value, required) => {
  if (value || required) {
    if (required && !value) {
      return {
        key: key,
        msg: `${formateKeyName(key)} is required`
      }
    }
    if (validEmailRegex.test(value)) {
      return '';
    } else {
      return {
        key: key,
        msg: `${formateKeyName(key)} should be a valid`
      }
    }
  } else {
    return '';
  }
}

export const imageValidation = (key, value, required) => {
  if (required || value) {
    if (!value) {
      return {
        key: key,
        msg: `${formateKeyName(key)} is required`
      }
    }
    if (!value.name.match(/\.(jpg|jpeg|png)$/)) {
      return {
        key: key,
        msg: `${formateKeyName(key)} image file should be only of jpg, jpeg, png`
      }
    } else {
      return '';
    }
  } else {
    return '';
  }
}

export const validateFinally = async (form) => {
  let errors = []
  for (const [key, value] of Object.entries(form)) {
    if (key !== 'errors') {
      for (const [key1, value1] of Object.entries(value)) {
        if (key !== 'errors') {
          let error;
          if (value1.type.name === 'String') {
            error = await stringValidation(key1, value1.input_val, value1.required, value1.condition.min, value1.condition.max)
            if (error) errors.push(error);
          } else if (value1.type.name === 'Number') {
            error = await numberValidation(key1, value1.input_val, value1.required, value1.condition.min, value1.condition.max)
            if (error) errors.push(error);
          } else if (value1.type.name === 'Email') {
            error = await emailValidation(key1, value1.input_val, value1.required, value1.condition.min, value1.condition.max)
            if (error) errors.push(error);
          } else if (value1.type.name === 'File') {
            error = await imageValidation(key1, value1.input_val, value1.required, value1.condition.min, value1.condition.max)
            if (error) errors.push(error);
          }
        }
      }
    }
  }
  if (errors.length > 0) {
    throw errors;
  }
  return errors;
}
