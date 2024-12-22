//-----------------------Q1-------------------------

const sqrt = function (number) {
  return number * number;
};

const squaresOf = function (numbers) {
  return numbers.map(sqrt);
};

const numbers = [0, 1, 2, 3, 4, 5, 6];

console.log(squaresOf(numbers));

//---------------------------Q2---------------------

const lengthOfString = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengthOfString);
};

const strings1 = ["", "apple", "banana", "kiwi"];

console.log(lengthsOf(strings1));

//---------------------------Q3---------------------

const upperCase = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(upperCase);
};

const strings2 = ["hello", "world"];

console.log(uppercaseOf(strings1));
console.log(uppercaseOf(strings2));

//---------------------------Q4-----------------------

const firstCharacter = function (string) {
  return string ? string[0] : '';
};

const firstCharactersOf = function (strings) {
  return strings.map(firstCharacter);
};

console.log(firstCharactersOf(strings1));

//---------------------------Q5-----------------------

const truthValue = function (value) {
  return !!value;
};

const truthValuesOf = function (numbers) {
  return numbers.map(truthValue);
};

console.log(truthValuesOf(strings1));
console.log(truthValuesOf(numbers));

//---------------------------Q6-----------------------

const reverseString = function (string) {
  return string.split('').reverse().join('');
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

console.log(reversedStringsOf(strings1));
console.log(reversedStringsOf(strings2));

//---------------------------Q7-----------------------

const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};

const doubleLetter = function (string) {
  return string.split('').map(repeat(2)).join('');
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleLetter);
};

console.log(doubleLettersOf(strings1));
console.log(doubleLettersOf(strings2));

//---------------------------Q8-----------------------

const negatedBooleansOf = function (booleans) {
  return booleans.map(function (boolean) { return !boolean; });
};

const booleans = [true, false, false, true, true, false];
console.log(negatedBooleansOf(booleans));

//---------------------------Q9-------------------------

const charCodesOf = function (strings) {
  return strings.map(function (string) { return string.charCodeAt(0); });
};

const chars = ['a', 'b', 'c', 'm', 'n', 'y', 'z'];
console.log(charCodesOf(chars));
console.log(charCodesOf(strings1));

//---------------------------Q10-------------------------

const getDomain = function (email) {
  return email.slice(email.indexOf('@'), email.length);
};

const domainNamesOf = function (emails) {
  return emails.map(getDomain);
};

const emails = ["user1@gmail.com", "admin@yahoo.com"];
console.log(domainNamesOf(emails));

//---------------------------Q11-------------------------

const getSplitWords = function (string) {
  return string.split(' ');
};

const splitWordsOf = function (strings) {
  return strings.map(getSplitWords);
};

const splitWords = ["hello world", "goodbye moon"];
console.log(splitWordsOf(splitWords));

//---------------------------Q12-------------------------

const joinArray = function (array) {
  return array.join('');
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

const arrayOfArrays = [["a", "b"], ["c", "d"]];
console.log(joinedArraysOf(arrayOfArrays));

//---------------------------Q13-------------------------

const repeatedStringsOf = function (strings) {
  return strings.map(repeat(2));
};

console.log(repeatedStringsOf(strings1));
console.log(repeatedStringsOf(strings2));

//---------------------------Q14-------------------------

const VOWELS = 'aeiou';

const isAVowel = function (char) {
  return VOWELS.includes(char.toLowerCase());
};

const onlyVowels = function (string) {
  return string.split('').filter(isAVowel).join('');
};

const countVowelsOf = function (strings) {
  return strings.map(onlyVowels).map(lengthOfString);
};

console.log(countVowelsOf(strings1));
console.log(countVowelsOf(strings2));

//---------------------------Q15-------------------------

const reverseArray = function (array) {
  return array.reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverseArray);
};

const listOfLists = [[1, 2, 3], [4, 5, 6]];
console.log(reversedArraysOf(listOfLists));

//---------------------------Q16-------------------------

const compliment = function (f) {
  return function (...arg) {
    return !f(...arg);
  };
};

const onlyConsonents = function (string) {
  return string.split('').filter(compliment(isAVowel)).join('');
};

const withoutVowelsOf = function (strings) {
  return strings.map(onlyConsonents);
};

console.log(withoutVowelsOf(strings1));
console.log(withoutVowelsOf(strings2));

//---------------------------Q17-------------------------

const runningSum = function (array, currentElement) {
  const lastSum = array.length ? array.at(-1) : 0;
  return [...array, currentElement + lastSum];
};

const cumulativeSum = function (array) {
  return array.reduce(runningSum, []);
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(cumulativeSum);
};

const listOfNumbers = [[1, 2, 3], [4, 5, 6]];
console.log(cumulativeSumsOf(listOfNumbers));

//---------------------------Q18-------------------------

const reverseWords = function (words) {
  return reversedStringsOf(words.split(' ')).join(' ');
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};

const listOfWords = ["hello world", "goodbye moon"];
console.log(reversedWordsOf(listOfWords));

//---------------------------Q19-------------------------

const uniqueChars = function (uniqueChars, currentChar) {
  const isCharPresent = uniqueChars.includes(currentChar);
  return isCharPresent ? uniqueChars : uniqueChars + currentChar;
};

const onlyUniqueChars = function (string) {
  return string.split('').reduce(uniqueChars, '');
};

const uniqueCharactersOf = function (strings) {
  return strings.map(onlyUniqueChars);
};

console.log(uniqueCharactersOf(strings1));
console.log(uniqueCharactersOf(strings2));

//---------------------------Q20-------------------------

const range = function (from, to, step) {
  const numbers = [];
  for (let num = from; num < to; num += step) {
    numbers.push(num);
  }
  return numbers;
};

const ranges = function (number) {
  return range(0, number, 1);
};

const rangesOf = function (numbers) {
  return numbers.map(ranges);
};

console.log(rangesOf(numbers));

//-----------------------------Q21--------------------------------

const getFirstLetterCaptilize = function (string) {
  return string ? string[0].toUpperCase() + string.slice(1, string.length) : '';
};

const captilizedFirstLetter = function (longString) {
  return longString.split(' ').map(getFirstLetterCaptilize);
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(captilizedFirstLetter);
};

console.log(capitalizedFirstLettersOf(listOfWords));

//-------------------------------------Q22----------------------------------

const wordLengths = function (longString) {
  return longString.split(' ').map(lengthOfString);
};

const wordLengthsOf = function (strings) {
  return strings.map(wordLengths);
};

console.log(wordLengthsOf(listOfWords));

//-------------------------------------Q23----------------------------------

const flatArray = function (array) {
  return array.flat();
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArray);
};

const nestedArray = [[1, [2, 3]], [4, [5, 6]]];

console.log(flattenedArraysOf(nestedArray));

//-------------------------------------Q24----------------------------------

const sortedString = function (string) {
  return string.split('').sort().join('');
};

const sortedLettersOf = function (strings) {
  return strings.map(sortedString);
};

console.log(sortedLettersOf(strings1));
console.log(sortedLettersOf(strings2));

//-------------------------------------Q25----------------------------------

const wrappedStringWith = function (braces) {
  return function (string) {
    return braces[0] + string + braces[1];
  };
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrappedStringWith('[]'));
};

console.log(wrappedStringsOf(strings1));
console.log(wrappedStringsOf(strings2));