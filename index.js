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

console.log("======2nd_Assignment======toCamelCase====");

// 1st Way
const toCamelCase = (str) => {
  let strToArr = str.toLowerCase().split("_");
  let result = strToArr.map((item, i) =>
    1 > i ? item : item[0].toUpperCase() + item.slice(1)
  );
  return result.join("");
};
console.log(toCamelCase("cool_fun_things"));
// 2nd way
const camelCase = (str) => {
  let words = str.split("_");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }

  return words.join(" ");
};
console.log(camelCase("Coool_fUn_tHinG"));

//3rd Way
const Camel = (str) => {
  const words = str.toLowerCase().split(" ");
  console.log(words);
  let result = words.map((item) => item[0].toUpperCase() + item.slice(1));
  return result.join(" ");
};
console.log(Camel("iNterNet is an awEsome resource"));

console.log("======3rd_Assignment======hackerSpeak====");
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

/*##### 1. Format your string

- Write function named "_capitalizeFirstLetter_" that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to the console.

**Expected Output**

```javascript
capitalizeFirstLetter("hey there"); → `Hey There`
``` */
