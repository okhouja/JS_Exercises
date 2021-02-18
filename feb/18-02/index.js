/* Create a function that takes a word and returns the new word without including the first character.*/
function newWord(str) {
  return str.slice(1);
}
console.log(newWord("Hi,everybody"));
console.log(newWord("go,away"));

/*              # Sort Numbers in Descending Order #

Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest. */

function sortDescending(num) {
  let a = parseInt(num)
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  let b = parseInt(a);
  return b;
}
console.log(sortDescending("56784"));
console.log(sortDescending(1254859723));
