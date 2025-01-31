Implement and export a default function that populates an object with data from another object based on an allowed list of keys. Parameters:

- Source object
- List of keys that need to be replaced
- Data that needs to be merged into the source object

If the list of keys is empty, you need to merge all the data completely.

```javascript
import fill from '../objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }
```
