Implement and export a default function that takes an array of array pairs as input and returns an object derived from those pairs.

**Notes**
If there are matching keys when constructing an object, the value from the last array pair is taken:

```javascript
fromPairs([['cat', 5], ['dog', 6], ['cat', 11]])
// { 'cat': 11, 'dog': 6 }
```

```javascript
fromPairs([['fred', 30], ['barney', 40]]);
// { 'fred': 30, 'barney': 40 }
```

In your solution, try to avoid using built-in methods for converting to an object, such as `Object.fromEntries()`.
