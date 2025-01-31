Implement and export by default a function that performs shallow copying of objects.

```javascript
import cloneShallow from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneShallow(data);
```
Implement this functionality yourself without using the Object.assign() function.
