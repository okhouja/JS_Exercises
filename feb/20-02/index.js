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
