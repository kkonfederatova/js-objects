Implement and export by default a function that creates a company object and returns it. Only one property is required to create a company - the company name. Other properties are added only if they exist. Parameters:

- Name (required)
- An object with additional properties (if any)

Also, in addition to the name, companies have two properties with default values. If the value of these properties is not passed during creation, then they take the following values:

- state - moderating
- createdAt - the current date (in Unix time format. This number is the number of milliseconds that have passed since midnight on January 1, 1970)

```javascript
import make from '../company.js';

// Дополнительные свойства не переданы
const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

// Передаем дополнительные свойства
const company = make('Hexlet', { website: 'hexlet.io', state: 'published' });
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }
```
