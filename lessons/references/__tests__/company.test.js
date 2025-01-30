import is from '../company.js';

it('empty objects', () => {
  const company1 = {};
  const company2 = {};
  expect(is(company1, company2)).toBe(true);
});

it('different names', () => {
  const company1 = { name: 'Hexlet' };
  const company2 = { name: 'Google' };
  expect(is(company1, company2)).toBe(false);
});

it('same name', () => {
  const company1 = { name: 'Hexlet' };
  const company2 = { name: 'Hexlet' };
  expect(is(company1, company2)).toBe(true);
});

it('different states', () => {
  const company1 = {
    name: 'Hexlet',
    state: 'published',
    website: 'https://hexlet.io',
  };
  const company2 = {
    name: 'Hexlet',
    state: 'draft',
    website: 'https://hexlet.io',
  };
  expect(is(company1, company2)).toBe(false);
});

it('different sites', () => {
  const company1 = {
    name: 'Hexlet',
    state: 'published',
    website: 'https://hexlet.io',
  };
  const company2 = {
    name: 'Hexlet',
    state: 'published',
    website: 'https://code-basics.com',
  };
  expect(is(company1, company2)).toBe(false);
});

it('same everything', () => {
  const company1 = {
    name: 'Hexlet',
    state: 'published',
    website: 'https://hexlet.io',
  };
  const company2 = {
    name: 'Hexlet',
    website: 'https://hexlet.io',
    state: 'published',
  };
  expect(is(company1, company2)).toBe(true);
});
