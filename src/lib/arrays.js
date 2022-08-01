const getNthElement = (index, array) => {
  return array[index % array.length];
  
  /*if (index > (array.length -1)) {
  return array[index % array.length];
  } else {
    return array[index];
  } */
};

const arrayToCSVString = array => {
  return array.join(",");
  /*const output = array.reduce((acc,value) => acc + "," + value);
  return output;*/
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  let newArray = [element];
  let merge = array.concat(newArray);
  return merge;  
};

const removeNthElement = (index, array) => {
  array.splice(index,1);
};

const numbersToStrings = numbers => {
  const strings = numbers.map(num => {
    return String(num)
  });
  return strings;
};

const uppercaseWordsInArray = strings => {
  const upper = strings.map(str => {
    return str.toUpperCase()
  });
  return upper;
};

const reverseWordsInArray = strings => {
  const reverseString = (str) => str.split("").reverse().join("");
  const result = strings.map(reverseString)
  return result;
};

const onlyEven = numbers => {
  const result = numbers.filter(num => (num % 2) === 0);
  return result;
};

const removeNthElement2 = (index, array) => {
  const arrayCopy = array.map((x) => x);
  arrayCopy.splice(index,1);
  return arrayCopy;
};

const elementsStartingWithAVowel = strings => {
  const vowels = /^[aeiou]/i;
  const result = strings.filter(str => str.match(vowels));
  return result;
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
  return sum = numbers.reduce((acc,number) => acc + number);
};

const sortByLastLetter = strings => {
  return strings.sort((a,b) => a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
