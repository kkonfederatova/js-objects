Implement and export a set of functions for working with a dictionary built on a hash table. For simplicity, our implementation does not support collision resolution.

In essence, this task requires implementing objects. For obvious reasons, you cannot use objects to create objects. Imagine that the language does not have objects and we want to add them.

- make() — creates a new empty dictionary and returns it
- set(map, key, value) — sets the value by key to the dictionary. Works for both creation and modification. The function returns true if the value was successfully set. If a collision occurs, the function does not change the dictionary in any way and returns false
- get(map, key, defaultValue = null) — returns the value of the specified key. The defaultValue parameter is the value that the function returns if the dictionary does not contain the key (the default is null). If a collision occurs, the function also returns the default value

The set() and get() functions take a dictionary as the first parameter. The dictionary is passed by reference, so set() can modify it directly.

```javascript
import { make, set, get } from './map.js';

const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"
```
