console.log("======1st_Assignment======Word Converter====");

/* Word Converter

- Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at the expected output below. **Important**: Do **not** use a loop to complete this task. Print your solution to the console.

**Array of words**

javascript
["smart", "kind", "sweet", "small", "clear"];

**Expected output**

javascript
["smarter", "kinder", "sweeter", "smaller", "clearer"];
*/
// 1st Way
// in method_1
// 2nd Way
// in method_2

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
// in method_1
// 2nd way
// in method_2

// 3rd Way

const Camel = (str) => {
  const words = str.toLowerCase().split(" ");
  console.log(words);
  let result = words.map((item) => item[0].toUpperCase() + item.slice(1));
  return result.join(" ");
};
console.log(Camel("iNterNet is an awEsome resource"));

console.log("======3rd_Assignment======hackerSpeak====");
// 1st way *
// in method_1
// 2nd way
// in method_2

// 3rd Way
const hackerSpeaker3 = (str) => {
  const change = { a: 4, b: 3, i: 1, o: 0, s: 5 };
  const speak = (el) => (change.hasOwnProperty(el) ? change[el] : el);

  return str.split("").map(speak).join("");
};

console.log(hackerSpeaker3("i become a super coder"));
console.log(hackerSpeaker3("hackerSpeak javascript"));
console.log(hackerSpeaker3("javascript Awsome Jaaaaa its works"));

// 4th Way
// in main branch

// 5th Way

// in main branch
