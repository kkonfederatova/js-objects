import getDomainInfo from '../domain.js';

it('getDomainInfo', () => {
  const expected1 = {
    scheme: 'http',
    name: 'yandex.ru',
  };
  expect(getDomainInfo('yandex.ru')).toEqual(expected1);

  const expected2 = {
    scheme: 'https',
    name: 'hexlet.io',
  };
  expect(getDomainInfo('https://hexlet.io')).toEqual(expected2);

  const expected3 = {
    scheme: 'http',
    name: 'google.com',
  };
  expect(getDomainInfo('http://google.com')).toEqual(expected3);
});
