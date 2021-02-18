console.log("=== 1 ===== # Word without First Character # =======");

/*                  # Word without First Character #

Create a function that takes a word and returns the new word without including the first character.*/
function newWord(str) {
  return str.slice(1);
}
console.log(newWord("Hi,everybody"));
console.log(newWord("go,away"));

console.log("=== 2 ===== # Sort Numbers in Descending Order # =======");

/*              # Sort Numbers in Descending Order #

Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest. */

function sortDescending(num) {
  return parseInt(num.toString().split``.sort((a, b) => b - a).join``);
}

// 2 way
const sortDescending2 = (n) => +[...(n + "")].sort().reverse().join``;

console.log(sortDescending("56784"));
console.log(sortDescending(1254859723));
console.log(sortDescending2(1254859723));

console.log("=== 3 ===== # Reverse the Case # =======");

/*                      # Reverse the Case #

Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa. */

function reverseCase(str) {
  return str.split``.map((a) =>
    a == a.toLowerCase() ? a.toUpperCase() : a.toLowerCase()
  ).join``;
}
console.log(reverseCase("hApPy bIrThDay"));

// 2nd Way
function reverseCase2(str) {
  let a = str.split``;
  console.log(a);
  let result = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
      a[i] = a[i].toLowerCase();
    } else if (a[i] === a[i].toLowerCase()) {
      a[i] = a[i].toUpperCase();
    }
  }
  return a.join``;
}
console.log(reverseCase2("hApPy vAlaNtIne"));

console.log("=== 4 ===== # Hiding the Card Number # =======");

/*               # Hiding the Card Number #
Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
Ensure you return a string.
The length of the string must remain the same as the input. */

function cardHide(card) {
  let a = card.split``;
  let b = a.slice(-4);
  let countNum = "";
  for (let i = a.length - 4; i > 0; i--) {
    countNum += "*";
  }
  return countNum + b.join``;
}
console.log(cardHide("5411515454564"));

// 2nd Way
const cardHide2 = (card) => "*".repeat(card.length - 4) + card.slice(-4);
console.log(cardHide2("5411874375519"));

// 3rd Way
function cardHide3(card) {
  let a = card.split``;
  for (let i = 0; i < a.length - 4; i++) {
    a[i] = "*";
  }
  return a.join``;
}
console.log(cardHide3("5411874515519"));

// 4th Way
const cardHide4 = (card) => card.slice(-4).padStart(card.length, "*");
console.log(cardHide4("5445677654546"));

// 5th Way
const cardHide5 = (str) =>
  [...str].map((x, i) => (i < str.length - 4 ? (x = "*") : x)).join("");
console.log(cardHide5("5148598496544"));

// 6th Way
function cardHide6(card) {
  return (
    card
      .slice(0, card.length - 4)
      .split("")
      .map((el) => (el = "*"))
      .join("") + card.slice(card.length - 4)
  );
}
console.log(cardHide6("5458965461561"));

// 7th Way
const cardHide7 = (n) =>
  Array(n.length - 4).fill`*`.join`` + n.substring(n.length - 4);
console.log(cardHide6("4059847549881"));
