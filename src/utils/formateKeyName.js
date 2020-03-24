export const formateKeyName = (key) => {
  if (!key) return;
  let formatted_key = []
  for (let k of key.split('_')) {
    formatted_key.push(k[0].toUpperCase() + k.slice(1, k.length))
  }
  return formatted_key.join(' ');
}