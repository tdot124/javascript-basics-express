function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b;
};

function either(a, b) {
  return a || b;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
  if(a && b) {
    return false;
  } else if(a || b){
    return true;
  } else { 
    return false;}
};

function truthiness(a) {
  if(a) {
    return true;
  } else { 
    return false;};
};

function isEqual(a, b) {
  return a === b;
};

function isGreaterThan(a, b) {
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  return a <= b;
};

function isOdd(a) {
  return (a % 2) === 1;
};

function isEven(a) {
  return (a % 2) === 0;
};

function isSquare(a) {
  return Number.isInteger(Math.sqrt(a));
};

function startsWith(char, string) {
  return string.charAt(0) === char;
};

function containsVowels(string) {
  let vowels = /[ieoua]/gi;
  let result = string.match(vowels);
  return result !== null;
};

function isLowerCase(string) {
  let lowercase = /[A-Z]/g;
  let result = string.match(lowercase);
  return result === null;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
