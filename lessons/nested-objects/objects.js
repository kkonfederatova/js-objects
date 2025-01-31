export default (data, keys) => {
  let current = data;
  for (const key of keys) {
    const hasProperty = Object.hasOwn(current, key);
    if (!hasProperty) {
      return null;
    }
    current = current[key];
  }

  return current;
};
