export const VOWELS = 'aeiou';

export const sum = function (num1, num2) {
  return num1 + num2;
};

export const add = function (numbers) {
  return numbers.reduce(sum, 0);
};

export const multiply = function (num1, num2) {
  return num1 * num2;
};

export const product = function (numbers) {
  return numbers.reduce(multiply, 1);
};

export const sqrt = function (number) {
  return number * number;
};

export const isOdd = function (num) {
  return (num & 1) === 1;
};

export const isEven = function (num) {
  return (num & 1) === 0;
};

export const lengthOfString = function (string) {
  return string.length;
};

export const upperCase = function (string) {
  return string.toUpperCase();
};

export const firstCharacter = function (string) {
  return string ? string[0] : '';
};

export const truthValue = function (value) {
  return !!value;
};

export const reverseString = function (string) {
  return string.split('').reverse().join('');
};

export const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};

export const negatedBoolean = function (boolean) {
  return !boolean;
};

export const slice = function (from, to) {
  return function (string) {
    return string.slice(from, to);
  };
};

export const splitWith = function (char) {
  return function (string) {
    return string.split(char);
  };
};

export const joinWith = function (char) {
  return function (array) {
    return array.join(char);
  };
};

export const isAVowel = function (char) {
  return VOWELS.includes(char.toLowerCase());
};

export const onlyVowels = function (string) {
  const volels = splitWith('')(string).filter(isAVowel);
  return joinWith('')(volels);
};

export const reverseArray = function (array) {
  return array.reverse();
};

export const compliment = function (f) {
  return function (...arg) {
    return !f(...arg);
  };
};

export const onlyConsonents = function (string) {
  return string.split('').filter(compliment(isAVowel)).join('');
};

export const firstLetterCaptilize = function (string) {
  return string ? string[0].toUpperCase() + string.slice(1, string.length) : '';
};

export const firstLetterUncaptilize = function (string) {
  return string ? string[0].toLowerCase() + string.slice(1, string.length) : '';
};

export const flatArray = function (array) {
  return array.flat();
};

export const wordsLengthInSentence = function (sentence) {
  return sentence.split(' ').map(lengthOfString);
};

export const sortedString = function (string) {
  return string.split('').sort().join('');
};

export const wrappedStringWith = function (braces) {
  return function (string) {
    return braces[0] + string + braces[1];
  };
};

export const isAbove = function (target) {
  return function (number) {
    return number > target;
  };
};

export const isAdult = function (person) {
  return isAbove(18)(person.age);
};

export const extractProperties = function (object) {
  return function (key) {
    return object[key];
  };
};

export const extract = function (...properties) {
  return function (object) {
    return properties.map(extractProperties(object));
  };
};

export const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};


export const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

export const longestString = function (string, currentString) {
  return currentString.length > string.length ? currentString : string;
};

export const longestStringOf = function (strings) {
  return strings.reduce(longestString, '');
};

export const groupBy = function (list, fn) {
  return list.reduce((o, e) => {
    const value = o[fn(e)] || [];
    value.push(e);
    o[fn(e)] = value;
    return o;
  }, {});
};

export const concatStr = function (str1, str2) {
  return str1 + str2;
};

export const shortestString = function (str1, str2) {
  return str1.length < str2.length ? str1 : str2;
};

const isEqual = (element1, element2) => element1 === element2;

const isTypeSame = (element1, element2) => {
  return typeof element1 === typeof element2;
};

const isObject = (element) => {
  return typeof element === "object";
};

const checkObjectEquality = (obj1, obj2) => {
  const obj1Entries = Object.entries(obj1).toSorted();
  const obj2Entries = Object.entries(obj2).toSorted();

  return areEqual(obj1Entries, obj2Entries);
};

export const areEqual = (element1, element2) => {
  if (!isTypeSame(element1, element2)) {
    return false;
  }

  if (!isObject(element1) && !isObject(element2)) {
    return isEqual(element1, element2);
  }

  if (element1.length !== element2.length) {
    return false;
  }

  if (Array.isArray(element1) && Array.isArray(element2)) {
    return element1.every((curElement, index) =>
      areEqual(curElement, element2[index])
    );
  }

  return checkObjectEquality(element1, element2);
};