Implement and export a default function that counts the number of words in a sentence and returns an object. In an object, properties are words (converted to lowercase) and values ​​are the number of times a word appears in a sentence. Words in a sentence can be in different registers. Before counting, they must be converted to lower case so that duplicates are not skipped.

```javascript
import countWords from './words.js';

// Если предложение пустое, то возвращается пустой объект 
countWords('');
// {}

const text1 = 'one two three two ONE one wow';
countWords(text1);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
countWords(text2);
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
```