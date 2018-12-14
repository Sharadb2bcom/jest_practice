const capitalizeLetters = require("./capitalizeLetters");
const longestWord = require("./capitalizeLetters");
const chunkedArray = require("./capitalizeLetters");
test("check for defined or not ", () => {
  expect(capitalizeLetters).toBeDefined();
});

// test("check for first letter capitalized ", () => {
//   const str = "I love my india";
//   expect(capitalizeLetters(str)).toBe("I Love My India");
// });

test("check for defined ", () => {
  expect(longestWord).toBeDefined();
});

// test("check for single longest word ", () => {
//   const sentence = "Lets make the world peacefull";
//   expect(longestWord(sentence)).toEqual("peacefull");
// });

test("check for defined", () => {
  expect(chunkedArray).toBeDefined();
});

test("check for array returns chunk of an array", () => {
  const array = [1, 2, 3, 4, 5, 5, 6];
  const len = 2;
  expect(chunkedArray(array, 2)).toEqual([[1, 2], [3, 4], [5, 5], [6]]);
});
