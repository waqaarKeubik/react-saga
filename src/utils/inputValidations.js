import {formateKeyName} from './formateKeyName';
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