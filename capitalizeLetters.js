const capitalizeLetters = str =>
  str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ");

module.exports = capitalizeLetters;

//find longest word in the sentence
const longestWord = word => {
  //create a filtered array by removing any special characters
  const filteredArray = word.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = filteredArray.sort((a, b) => b.length - a.length);
  //if there are multiple words put it into an array
  const multiWords = sorted.filter(word => word.length === sorted[0].length);
  //check if more than one value in multiWords
  if (multiWords.length === 1) {
    return multiWords[0];
  } else {
    return multiWords;
  }
};
module.exports = longestWord;

const chunkedArray = (arr, len) => {
  const result = [];
  let i = 0;
  while (i < arr.length) {
    result.push(arr.slice(i, i + len));
    i = i + len;
  }
  return result;
};

module.exports = chunkedArray;
