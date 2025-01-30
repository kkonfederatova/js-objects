export default (domain) => {
  let scheme;
  let name;
  if (domain.startsWith('http')) {
    const parts = domain.split('://')
    scheme = parts[0];
    name = parts[1];
  } else {
    scheme = 'http';
    name = domain;
  }
  return { scheme, name };
}
  