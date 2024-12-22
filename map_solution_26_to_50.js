//-----------------------Generic Functions----------------------//

const VOWELS = 'aeiou';

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
  return string ? string[0] : '';
};

const truthValue = function (value) {
  return !!value;
};

const reverseString = function (string) {
  return string.split('').reverse().join('');
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
  const volels = splitWith('')(string).filter(isAVowel);
  return joinWith('')(volels);
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
  return string.split('').filter(compliment(isAVowel)).join('');
};

const firstLetterCaptilize = function (string) {
  return string ? string[0].toUpperCase() + string.slice(1, string.length) : '';
};

const flatArray = function (array) {
  return array.flat();
};

const wordsLengthInSentence = function (sentence) {
  return sentence.split(' ').map(lengthOfString);
};

const sortedString = function (string) {
  return string.split('').sort().join('');
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

//-----------------------Q26--------------------------

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