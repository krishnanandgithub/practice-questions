//-----------------------Generic Functions----------------------//

import { add, extract, firstCharacter, isAbove, joinWith, longestStringOf, max, min, product, splitWith } from "./generic_function";



//-----------------------Q26--------------------------

const extractNames = function (objects) {
  return objects.flatMap(extract('name'));
};

const nameObjects = [{ name: "Alice" }, { name: "Bob" }];
console.log(extractNames(nameObjects));

//---------------------------Q27------------------------------

const extractAges = function (objects) {
  return objects.flatMap(extract('age'));
};

const ageObjects = [{ age: 25 }, { age: 30 }];
console.log(extractAges(ageObjects));

//---------------------------Q28------------------------------

const firstLettersOfNames = function (objects) {
  return objects.flatMap(extract('name')).map(firstCharacter);
};

console.log(firstLettersOfNames(nameObjects));

//---------------------------Q29------------------------------

const calculateAreas = function (rectangles) {
  return rectangles.map(extract('width', 'height')).map(product);
};

const rectanglesObject = [
  { width: 2, height: 3 },
  { width: 4, height: 5 }
];
console.log(calculateAreas(rectanglesObject));

//---------------------------Q30------------------------------

const extractFlags = function (objects) {
  return objects.flatMap(extract('active'));
};

const flagObject = [
  { active: true },
  { active: false }
];
console.log(extractFlags(flagObject));

//---------------------------Q31------------------------------

const fullNames = function (objects) {
  return objects.map(extract('firstName', 'lastName')).map(joinWith(' '));
};

const fullNameObject = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Brown" }
];

console.log(fullNames(fullNameObject));

//---------------------------Q32------------------------------

const totalPrices = function (objects) {
  return objects.map(extract('price', 'quantity')).map(product);
};

const priceObject = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 4 }
];

console.log(totalPrices(priceObject));

//---------------------------Q33------------------------------

const isAdults = function (objects) {
  return objects.flatMap(extract('age')).map(isAbove(18));
};

const adultObjuct = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 }
];

console.log(isAdults(adultObjuct));

//---------------------------Q34------------------------------

const getAbbreviation = function (names) {
  const [cityName, country] = names;
  const cityAbbreviation = cityName.split(' ').map(firstCharacter).join('');

  return cityAbbreviation + ' ' + country;
};

const abbreviations = function (objects) {
  return objects.map(extract('city', 'country')).flatMap(getAbbreviation);
};

const abbreviationObject = [
  { city: "New York", country: "USA" },
  { city: "Los Angeles", country: "USA" }
];

console.log(abbreviations(abbreviationObject));

//---------------------------Q35------------------------------

const mathScores = function (objects) {
  return objects.flatMap(extract('scores')).flatMap(extract('math'));
};

const scoreObject = [
  { name: "Alice", scores: { math: 90, english: 85 } },
  { name: "Bob", scores: { math: 80, english: 75 } }
];

console.log(mathScores(scoreObject));

//---------------------------Q36------------------------------

const extractCoordinates = function (objects) {
  return objects.map(extract('x', 'y'));
};

const coordinatesObject = [
  { x: 1, y: 2 },
  { x: 3, y: 4 }
];

console.log(extractCoordinates(coordinatesObject));

//---------------------------Q37------------------------------

const addName = function (nameAndAge) {
  const [firstName, lastName, age] = nameAndAge;
  return [firstName + ' ' + lastName, age];
};

const fullNameAndAge = function (objects) {
  return objects.map(extract('firstName', 'lastName', 'age')).map(addName);
};

const fullNameAgeObject = [
  { firstName: "Alice", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Brown", age: 30 }
];

console.log(fullNameAndAge(fullNameAgeObject));

//---------------------------Q38------------------------------

const extractScores = function (objects) {
  return objects.flatMap(extract('scores')).map(extract('math', 'english'));
};

console.log(extractScores(scoreObject));

//---------------------------Q39------------------------------

const keyValuePairs = function (objects) {
  return objects.map(extract('key', 'value'));
};

const keyValueObject = [
  { key: "a", value: 1 },
  { key: "b", value: 2 }
];

console.log(keyValuePairs(keyValueObject));

//---------------------------Q40------------------------------

const splitFullNames = function (objects) {
  return objects.flatMap(extract('name')).map(splitWith(' '));
};

const splitFullNameObject = [
  { name: "Alice Smith" },
  { name: "Bob Brown" }
];

console.log(splitFullNames(splitFullNameObject));

//---------------------------Q41------------------------------

const normalizeScores = function (objects) {
  const scores = objects.flatMap(extract('score'));
  const maxScores = scores.reduce(max, -Infinity);

  return scores.map(function (score) { return score / maxScores; });
};

const normalizeScoreObject = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 100 }
];

console.log(normalizeScores(normalizeScoreObject));

//---------------------------Q42------------------------------

const percentageContributions = function (numbers) {
  const totalScore = add(numbers);
  return numbers.map(function (score) { return (score * 100) / totalScore; });
};

const scores = [10, 20, 30];

console.log(percentageContributions(scores));

//---------------------------Q43------------------------------

const subtractMin = function (numbers) {
  const minimum = numbers.reduce(min, Infinity);
  return numbers.map(function (num) { return num - minimum; });
};

const numbers = [4, 6, 7, 3];

console.log(subtractMin(numbers));


//---------------------------Q44------------------------------

export const sortInDescending = function (array) {
  return array.sort(function (a, b) { return b - a; });
};

const rank = function (orderdMarks) {
  return function (mark) {
    return orderdMarks.indexOf(mark) + 1;
  };
};

const calculateRanks = function (objects) {
  const marks = objects.flatMap(extract('score'));
  const orderdMarks = sortInDescending(marks);

  return objects.flatMap(extract('score')).map(rank(orderdMarks));
};

const rankObject = [
  { name: "Alice", score: 80 },
  { name: "Aman", score: 75 },
  { name: "Bob", score: 100 },
  { name: "Charlie", score: 90 },
  { name: "Jobs", score: 80 }
];

console.log(calculateRanks(rankObject));

//---------------------------Q45------------------------------

const normalizeStringLengths = function (strings) {
  const maxLength = longestStringOf(strings).length;
  return strings.map(function (str) { return str.padEnd(maxLength); });
};

const normalizeStringObject = ["cat", "elephant", "dog"];

console.log(normalizeStringLengths(normalizeStringObject));