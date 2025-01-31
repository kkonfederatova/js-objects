export default (data) => {
  const result = {};
  for (const prop in data) {
    result[prop] = data[prop];
  }
  return result;
}