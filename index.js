/* /*##### 3. Word Converter

- Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at the expected output below. **Important**: Do **not** use a loop to complete this task. Print your solution to the console.

**Array of words**

```javascript
["smart", "kind", "sweet", "small", "clear"];
```

**Expected output**

```javascript
["smarter", "kinder", "sweeter", "smaller", "clearer"];
```*/
let str = ["smart", "kind", "sweet", "small", "clear"];

function wordConverter(arr) {
  return arr.map((word) => (word += "er"));
}

console.log(wordConverter(str));
