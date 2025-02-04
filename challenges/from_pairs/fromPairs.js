export default (arr) => {
  const result = {};

  for(const [key, value] of arr){
    result[key] = value;
  }
  return result;
}
