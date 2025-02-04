Query String - part of the web page address containing constants and their values. It starts after the question mark and goes to the end of the address. Example:

```markdown
# query string: page=5
https://ru.hexlet.io/blog?page=5
```

If there are several parameters, they are separated by an ampersand &:

```markdown
# query string: page=5&per=10
https://ru.hexlet.io/blog?per=10&page=5
```

Implement and export a default function that takes a list of parameters as input and returns a query string generated from those parameters:

```javascript
import bqs from '../buildQueryString.js';

bqs({ per: 10, page: 1 });
// page=1&per=10
bqs({ param: 'all', param1: true });
// param=all&param1=true
```

The parameter names in the output string must be in alphabetical order (that is, they must be sorted).
