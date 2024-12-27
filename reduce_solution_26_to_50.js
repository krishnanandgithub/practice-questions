//---------------------Generic Function-------------------------//

const VOWELS = "aeiou";

const sum = function (num1, num2) {
  return num1 + num2;
};

const add = function (numbers) {
  return numbers.reduce(sum, 0);
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const product = function (numbers) {
  return numbers.reduce(multiply, 1);
};

const sqrt = function (number) {
  return number * number;
};

const lengthOfString = function (string) {
  return string.length;
};

const upperCase = function (string) {
  return string.toUpperCase();
};

const firstCharacter = function (string) {
  return string ? string[0] : "";
};

const truthValue = function (value) {
  return !!value;
};

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

const repeat = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};

const negatedBoolean = function (boolean) {
  return !boolean;
};

const slice = function (from, to) {
  return function (string) {
    return string.slice(from, to);
  };
};

const splitWith = function (char) {
  return function (string) {
    return string.split(char);
  };
};

const joinWith = function (char) {
  return function (array) {
    return array.join(char);
  };
};

const isAVowel = function (char) {
  return VOWELS.includes(char.toLowerCase());
};

const onlyVowels = function (string) {
  const volels = splitWith("")(string).filter(isAVowel);
  return joinWith("")(volels);
};

const reverseArray = function (array) {
  return array.reverse();
};

const compliment = function (f) {
  return function (...arg) {
    return !f(...arg);
  };
};

const onlyConsonents = function (string) {
  return string.split("").filter(compliment(isAVowel)).join("");
};

const firstLetterCaptilize = function (string) {
  return string ? string[0].toUpperCase() + string.slice(1, string.length) : "";
};

const firstLetterUncaptilize = function (string) {
  return string ? string[0].toLowerCase() + string.slice(1, string.length) : "";
};

const flatArray = function (array) {
  return array.flat();
};

const wordsLengthInSentence = function (sentence) {
  return sentence.split(" ").map(lengthOfString);
};

const sortedString = function (string) {
  return string.split("").sort().join("");
};

const wrappedStringWith = function (braces) {
  return function (string) {
    return braces[0] + string + braces[1];
  };
};

const isAbove = function (target) {
  return function (number) {
    return number > target;
  };
};

const isAdult = function (person) {
  return isAbove(18)(person.age);
};

const extractProperties = function (object) {
  return function (key) {
    return object[key];
  };
};

const extract = function (...properties) {
  return function (object) {
    return properties.map(extractProperties(object));
  };
};

const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

const longestString = function (string, currentString) {
  return currentString.length > string.length ? currentString : string;
};

const longestStringOf = function (strings) {
  return strings.reduce(longestString, "");
};

//-------------------------------Q26-------------------------------
const _getCount = function (obj, str) {
  return str in obj ? { ...obj, [str]: obj[str] + 1 } : { ...obj, [str]: 1 };
};

const getCount = function (obj, str) {
  const count = (obj[str] || 0) + 1;
  obj[str] = count;
  return obj;
};

const countOccurrences = (strings) => strings.reduce(getCount, {});

const occurrenceWords = [
  "apple",
  "banana",
  "apple",
  "cherry",
  "banana",
  "apple",
];
console.log(countOccurrences(occurrenceWords));

//-------------------------------Q27-------------------------------

const mergeObj = function (obj, curObj) {
  const keys = Object.keys(curObj);
  for (const key of keys) {
    obj[key] = (obj[key] || 0) + curObj[key];
  }

  return obj;
};

const mergeObjects = function (objects) {
  return objects.reduce(mergeObj, {});
};

const objToMerge = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }];
console.log(mergeObjects(objToMerge));

//-------------------------------Q28-------------------------------

const zip = function (keys, values) {
  return keys.reduce((obj, key, i) => {
    obj[key] = values[i];
    return obj;
  }, {});
};

const keys = ["a", "b", "c"];
const values = [1, 2, 3];

console.log(zip(keys, values));

//-------------------------------Q29-------------------------------

const invertObject = function (obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return zip(values, keys);
};

const obj = { a: 1, b: 2, c: 3 };
console.log(invertObject(obj));

//-------------------------------Q30-------------------------------

const mergeArrays = function (arr1, arr2) {
  return arr1.concat(arr2).reduce((o, e) => {
    o[e[0]] = e[1];
    return o;
  }, {});
};

const arr1 = [
  ["a", 1],
  ["b", 2],
];
const arr2 = [
  ["c", 3],
  ["d", 4],
];

console.log(mergeArrays(arr1, arr2));

//-------------------------------Q31-------------------------------

const getProperty = (key) => (obj) => obj[key];

const groupBy = function (list, fn) {
  return list.reduce((o, e) => {
    const value = o[fn(e)] || [];
    value.push(e);
    o[fn(e)] = value;
    return o;
  }, {});
};

const groupByProperty = function (objects) {
  return groupBy(objects, getProperty("age"));
};

const objArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

console.log(groupByProperty(objArr));

//-------------------------------Q32-------------------------------

const ascendingGroup = (a, e) => {
  if (a.at(-1).at(-1) < e) {
    a.at(-1).push(e);
    return a;
  }

  return [...a, [e]];
};

const ascendingGroups = function (numbers) {
  const ascending = numbers.reduce(ascendingGroup, [[]]);
  ascending.shift();
  return ascending;
};

const randomNumbers = [1, 2, 3, 4, 3, 4, 5, 10, 6, 7, 8, 9];
console.log(ascendingGroups(randomNumbers));

//-------------------------------Q33-------------------------------

const flattenToObject = function (pairs) {
  return pairs.reduce((o, e) => {
    o[e[0]] = e[1];
    return o;
  }, {});
};

const entries = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
console.log(flattenToObject(entries));
