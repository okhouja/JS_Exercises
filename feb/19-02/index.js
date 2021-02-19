console.log("=== 1 ===== # Game of Thrones: Character Titles # =======");
/*                  # Game of Thrones: Character Titles #

Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

The words and, the, of and in should be lowercase.
All other words should have the first character as uppercase and the rest lowercase.

Examples
correctTitle("jOn SnoW, kINg IN thE noRth.")
➞ "Jon Snow, King in the North."

correctTitle("sansa stark, lady of winterfell.")
➞ "Sansa Stark, Lady of Winterfell."

correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
➞ "Tyrion Lannister, Hand of the Queen."
Notes:
Punctuation and spaces must remain in their original positions.
Hyphenated words are considered separate words.
Be careful with words that contain and, the, of or in. */

const lower = ["and", "the", "of", "in"];
const capFirst = (word) =>
  lower.includes(word)
    ? word
    : word.charAt(0).toUpperCase() + word.substring(1);
const capitalize = (word) => word.split("-").map(capFirst).join("-");

const correctTitle = (str) =>
  str.toLowerCase().split(" ").map(capitalize).join(" ");
/*function correctTitle(str) {
  let a = str.toLowerCase().split` `;
  let result = "";
  for (let i = 0; i < a.length; i++) {
    result += a[i][0].toUpperCase() + `` + a[i].slice(1);
  }
  return result;
}*/
console.log(correctTitle("jOn SnoW, kINg IN thE noRth."));

// 2nd Way
const exceptions = ["and", "the", "of", "in"];

const capitalize2 = (word) => word[0].toUpperCase() + word.slice(1);

const correctTitle2 = (str) => {
  let words = str.toLowerCase().split(" ");
  return words
    .map((word) =>
      word
        .split("-")
        .map((subword) =>
          exceptions.includes(subword) ? subword : capitalize(subword)
        )
        .join("-")
    )
    .join(" ");
};

// 3rd Way
const correctWord = (str) =>
  ["of", "and", "the", "in"].find((elem) => elem === str.toLowerCase()) ===
  undefined
    ? str[0].toUpperCase() + str.slice(1).toLowerCase()
    : str.toLowerCase();
const correctTitle3 = (str) =>
  str
    .split(" ")
    .map((el) =>
      el.includes("-")
        ? el
            .split("-")
            .map((el) => correctWord(el))
            .join("-")
        : correctWord(el)
    )
    .join(" ");

console.log(
  "=== 2 ===== # Return the Middle Character(s) of a String # ======="
);

/*              # Return the Middle Character(s) of a String #

Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

Examples
getMiddle("test") ➞ "es"

getMiddle("testing") ➞ "t"

getMiddle("middle") ➞ "dd"

getMiddle("A") ➞ "A" 
Notes
All test cases contain a single word (as a string).*/

function getMiddle(str) {
  let start = Math.ceil(str.length / 2) - 1;
  let end = Math.floor(str.length / 2) + 1;
  return str.substring(start, end);
}
console.log(getMiddle("hello"));
console.log(getMiddle("good"));

// 2nd Way
function getMiddle2(str) {
  return str.length % 2
    ? str[(str.length - 1) / 2]
    : str.substr((str.length - 2) / 2, 2);
}
console.log(getMiddle2("hello"));
console.log(getMiddle2("good"));
// 3rd Way
var getMiddle3 = (str) => {
  const mid = str.length / 2;
  const even = !(str.length % 2);

  return even ? str.substring(mid - 1, mid + 1) : str.charAt(mid);
};
console.log(getMiddle3("hello"));
console.log(getMiddle3("good"));
// 4th Way
function getMiddle4(str) {
  const len = str.length;
  if (len % 2 === 1) return str.charAt(Math.floor(len / 2));
  else return str.substr(len / 2 - 1, 2);
}
console.log(getMiddle4("hello"));
console.log(getMiddle4("gyfytfyhuoiuod"));

console.log("=== 3 ===== # Reverse the Odd Length Words # =======");

/* # Reverse the Odd Length Words #

Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used. */

// 1st Way

function reverseOdd(str) {
  return str
    .split(" ")
    .map((w) => (w.length % 2 ? [...w].reverse().join("") : w))
    .join(" ");
}

console.log(reverseOdd("One two three four"));

// 2nd way

function reverseOdd2(str) {
  const splitted = str.split(" ");
  return splitted
    .map((item) => {
      if (item.length % 2 !== 0) {
        return item.split("").reverse().join("");
      } else {
        return item;
      }
    })
    .join(" ");
}
console.log(reverseOdd2("Bananas"));
console.log(reverseOdd2("One two three four"));
console.log(reverseOdd2("Make sure uoy only esrever sdrow of ddo length"));

// 3rd Way

function reverseOdd3(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length % 2 === 0 ? word : word.split("").reverse().join("")
    )
    .join(" ");
}
console.log(reverseOdd3("Bananas"));
console.log(reverseOdd3("One two three four"));
console.log(reverseOdd3("Make sure uoy only esrever sdrow of ddo length"));

// 4th Way
const reverseArr = (str) => str.split("").reverse().join("");
const reverseOdd4 = (str) =>
  str
    .split(" ")
    .map((item) => (item.length % 2 !== 0 ? reverseArr(item) : item))
    .join(" ");
console.log(reverseOdd4("Make sure uoy only esrever sdrow of ddo length"));
