console.log("======1st_Assignment======Word Converter====");

/*  Word Converter

- Given an array of words, create a function named "_wordConverter_" which uses an array method to add _"er"_ to the end of each string in the array. Look at the expected output below. **Important**: Do **not** use a loop to complete this task. Print your solution to the console.

**Array of words**

["smart", "kind", "sweet", "small", "clear"];

**Expected output**

javascript
["smarter", "kinder", "sweeter", "smaller", "clearer"];
*/
// 1st Way
// in method_1
// 2nd Way

const wordConv = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += "er";
  }
  return arr;
};
console.log(wordConv(str));

console.log("======2nd_Assignment======toCamelCase====");

// 1st Way
// in method_1
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

console.log("======3rd_Assignment======hackerSpeak====");
// 1st way *
// in method_1
// 2nd way
const hackerSpeak2 = (str) => {
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
