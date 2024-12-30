//------------------------Generic Function-------------------------

import { areEqual, groupBy } from "./generic_function";

//-------------------------------Q26-------------------------------

const getCount = function (obj, str) {
  const count = (obj[str] || 0) + 1;
  obj[str] = count;
  return obj;
};

export const countOccurrences = (strings) => strings.reduce(getCount, {});

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

export const zip = function (keys, values) {
  return keys.reduce((obj, key, i) => {
    obj[key] = values[i];
    return obj;
  }, {});
};

const keys = ["a", "b", "c"];
const values = [1, 2, 3];

console.log(zip(keys, values));

//-------------------------------Q29-------------------------------

export const invertObject = function (obj) {
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

const property = (key) => (obj) => obj[key];

const groupByProperty = function (objects) {
  return groupBy(objects, property("age"));
};

const objArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];

console.log(groupByProperty(objArr));

//-------------------------------Q32-------------------------------

const ascendingGroup = (groups, element) => {
  const lastGroup = groups.at(-1) || [];

  if (lastGroup.at(-1) < element) {
    lastGroup.push(element);
    return groups;
  }

  return [...groups, [element]];
};

export const ascendingGroups = function (numbers) {
  return numbers.reduce(ascendingGroup, []);
};

const randomNumbers = [1, 2, 3, 4, 3, 4, 5, 10, 6, 7, 8, 9];
console.log(ascendingGroups(randomNumbers));

//-------------------------------Q33-------------------------------

export const flattenToObject = function (pairs) {
  return pairs.reduce((group, [key, value]) => {
    group[key] = value;
    return group;
  }, {});
};

const entries = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
console.log(flattenToObject(entries));

//-------------------------------Q34-------------------------------

const longestStringInStrings = function (strings) {
  return strings.reduce(longestString, "");
};

const listOfStrings = ["apple", "banana", "cherry", "dates"];
console.log(longestStringInStrings(listOfStrings));

//-------------------------------Q35-------------------------------

const mergeIntervals = function (intervals) {
  return intervals.reduce(mergeInterval(intervals), []);
};

const intervals = [
  [1, 3],
  [5, 7],
  [6, 12],
  [2, 4],
];

console.log(mergeIntervals(intervals));
