//-----------------------Generic Functions----------------------//

const VOWELS = 'aeiou';

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

//-----------------------Q26--------------------------

const extractProperty = function (key) {
  return function (object) {
    return object[key];
  };
};

const extractNames = function (objects) {
  return objects.map(extractProperty('name'));
};

const nameObjects = [{ name: "Alice" }, { name: "Bob" }];
console.log(extractNames(nameObjects));

//---------------------------Q27------------------------------

const extractAges = function (objects) {
  return objects.map(extractProperty('age'));
};

const ageObjects = [{ age: 25 }, { age: 30 }];
console.log(extractAges(ageObjects));

//---------------------------Q28------------------------------

const firstLettersOfNames = function (objects) {
  return objects.map(extractProperty('name')).map(firstCharacter);
};

console.log(firstLettersOfNames(nameObjects));

//---------------------------Q29------------------------------

const areaOfRectangles = function (rectangle) {
  const width = extractProperty('width')(rectangle);
  const height = extractProperty('height')(rectangle);
  return width * height;
};

const calculateAreas = function (rectangles) {
  return rectangles.map(areaOfRectangles);
};

const rectanglesObject = [{ width: 2, height: 3 }, { width: 4, height: 5 }];
console.log(calculateAreas(rectanglesObject));