console.log("======1st_Assignment======Word Converter====");

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


  let strToArr = str.toLowerCase().split("_");
  let result = strToArr.map((item, i) =>
    1 > i ? item : item[0].toUpperCase() + item.slice(1)
  );
  return result.join("");
};
console.log(toCamelCase("cool_fun_things"));

const hackSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "e":
          return "3";
        case "i":
          return "1";
        case "o":
          return "0";
        case "s":
          return "5";
        default:
          return chr;
      }
    })
    .join("");
};
console.log(hackSpeak("I like javaScript"));
<