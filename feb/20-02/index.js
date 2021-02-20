console.log("=== 1 ===== # Format your string # =======");

/*                           # Format your string #

- Write function named "_capitalizeFirstLetter_" that accepts a string as an argument. The function should convert the first character of each word to uppercase. **Example** _the quick brown fox_ → _The Quick Brown Fox_. Print your solution to the console.

**Expected Output**

capitalizeFirstLetter("hey there"); → `Hey There` */
// 1st Way
const capitalizeFirstLetter = (str) => {
  let words = str.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};

console.log(capitalizeFirstLetter("the quick brown fox"));

// 2nd Way
const capitalizeFirstLetter2 = (str) => {
  return str.toLowerCase().split` `.map(
    (el) => el.charAt(0).toUpperCase() + el.substr(1)
  ).join` `;
};

console.log(capitalizeFirstLetter2("the quick brown fox"));
// 3rd Way
const captialize = (words) =>
  words
    .split(" ")
    .map((w) => w.substring(0, 1).toUpperCase() + w.substring(1))
    .join(" ");
console.log(captialize("hi every body here"));

console.log("=== 2 ===== # Hour Calculation # =======");

/*                          # Hour Calculation #

- Create a function called "_calculateHours_" which calculate how many hours (total) this person worked in the week based on the data structure `hourTracking` below. **Note**: start is always morning time, end is always afternoon. Print your solution to the console.

**Working Hours**

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

**Expected Output**

36; 
  */
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
const calculateHours = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]["end"] - arr[i]["start"];
  }
  return total;
};
console.log(calculateHours(hourTracking));
// 2nd Way
const calculateHours2 = (hours) => {
  return hours.reduce((total, hours) => total + (hours.end - hours.start), 0);
};
console.log(calculateHours2(hourTracking));

console.log("=== 3 ===== # Create Grid (Optional) # =======");

/*                   # Create Grid (Optional) #

- Create a function called "createGrid", which returns a grid of a 2D array by accepting two arguments: `size` (which determines the number of nested arrays and the number of elements in each nested array) and `char` (which determines the characters in each nested array). Print your solution to the console.

**Create Grid Function Call**

createGrid(3, "*");

**Expected Output**
[
  ["*", "*", "*"],
  ["*", "*", "*"],
  ["*", "*", "*"]
]; */
// 1st Way

const createGrid = (size, char) => {
  const newArr = new Array(size).fill(new Array(size).fill(char));
  return newArr;
};
console.log(createGrid(3, "*"));

// 2nd Way
const createGrid2 = (size, char) => {
  let grid = [];
  for (let i = 0; i < size; i++) {
    grid.push([]);
    for (let j = 0; j < size; j++) {
      grid[i].push(char);
    }
  }
  return grid;
};
console.log(createGrid2(3, "*"));

let a = [1, 4, 46, 76];
let b = new Array(a).fill(new Array(a));
console.log(b);

// 3rd Way

const createGrid3 = (size, char) => Array(size).fill(Array(size).fill(char));

console.log(createGrid3(3, "*"));
