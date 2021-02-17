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
// 1st Way
let str = ["smart", "kind", "sweet", "small", "clear"];

function wordConverter(arr) {
  return arr.map((word) => (word += "er"));
}

console.log(wordConverter(str));
// 2nd Way
const wordConv = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += "er";
  }
  return arr;
};
console.log(wordConv(str));

// 3rd Way
const wordCon = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].concat("er");
  }
  return arr;
};
console.log(wordCon(str));

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
// 1st way *
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
//2nd way
const hackerSpeak = (str) => {
  const lowerStr = str.toLowerCase();
  const letters = lowerStr.split("");
  const hackerSpeak = [];
  for (let i = 0; i < letters.length; i++) {
    switch (letters[i]) {
      case "a":
        letters[i] = "4";
        break;
      case "e":
        letters[i] = "3";
        break;
      case "i":
        letters[i] = "1";
        break;
      case "o":
        letters[i] = "0";
        break;
      case "s":
        letters[i] = "5";
        break;
      default:
        letters[i];
    }
    hackerSpeak.push(letters[i]);
  }
  return hackerSpeak.join("");
};

console.log(hackerSpeak("become a coder"));

// 3rd Way
const hackSpeaker = (str) => {
  const change = { a: 4, b: 3, i: 1, o: 0, s: 5 };
  const speak = (el) => (change.hasOwnProperty(el) ? change[el] : el);

  return str.split("").map(speak).join("");
};

console.log(hackSpeaker("i become a super coder"));
console.log(hackSpeaker("hackerSpeak javascript"));

// 4th Way

const hs = (orig) => {
  replacements = { a: "4", e: "3", i: "1", o: "0" };
  return Object.entries(replacements).reduce(
    (acc, el) => acc.replace(el[0], el[1]),
    orig
  );
};

console.log(hs("life"));
console.log(hs("air"));
console.log(hs("none"));
console.log(hs("javascript"));
