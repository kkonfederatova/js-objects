import fs from 'fs';
import getJsonFileData from '../objects.js';

it('getJsonFileData', () => {
  const actual = getJsonFileData();
  const fileContent = fs.readFileSync('./example.json', 'utf-8');
  const expected = JSON.parse(fileContent);
  expect(actual).toEqual(expected);
});
