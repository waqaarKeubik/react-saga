export const formateKeyName = (key) => {
  if (!key) return;
  let formatted_key = []
  for (let k of key.split('_')) {
    formatted_key.push(k[0].toUpperCase() + k.slice(1, k.length))
  }
  return formatted_key.join(' ');
}

export const showInputFieldError = (errors, key) => {
  let indexIs = errors.findIndex((error) => {
    return error.key === key
  })
  if (indexIs > -1) {
   return errors[indexIs].msg;
  }
  return;
}