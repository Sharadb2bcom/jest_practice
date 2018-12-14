const arrayChunk = require("./chunk");

test("check is it defined ?", () => {
  expect(arrayChunk).toBeDefined();
});

test("return an array of chunks with len 2", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const len = 2;
  expect(arrayChunk(arr, len)).toEqual([[1, 2], [3, 4], [5, 6]]);
});
