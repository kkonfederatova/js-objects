Implement and export a default function that converts the passed object into another object that includes only the specified properties. Parameters:

- Source object
- Array of property names

```javascript
import pick from './objects.js';

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']); // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется 
pick(data, ['none', 'cores']); // { cores: 4 }
```