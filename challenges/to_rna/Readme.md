DNA and RNA are sequences of nucleotides.

The four nucleotides in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

The RNA chain is made up of the DNA chain by sequentially replacing each nucleotide:

- G -> C
- C -> G
- T -> A
- A -> U

Implement and export a default function that takes a DNA strand as input and returns the corresponding RNA strand (transcribes the RNA).

If the input parameter does not contain any nucleotides (i.e. an empty string is passed), the function should return an empty string. If the passed DNA strand contains an "unknown" nucleotide (not one of the four listed above), the function should return null.

```javascript
dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
```
