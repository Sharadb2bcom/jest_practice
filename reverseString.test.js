const reverseString = require("./reverseString");

test("check wheather reverseString function is defined!", () => {
  expect(reverseString).toBeDefined();
});

test("check for string reverse", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("check for string reverse with case sensitive", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
