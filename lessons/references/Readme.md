Implement and export by default a function that compares objects by data matches rather than by references. This function takes two companies as input and returns **true** if their structure is the same, and **false** otherwise. The check should be carried out on the properties **name, state, website**.

```javascript
import is from './company.js';

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company1, company2); // true
```