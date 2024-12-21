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

const doubleLetter = function (string) {
  return string ? string[0] + string : '';
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