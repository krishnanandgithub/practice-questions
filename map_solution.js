//-----------------------Q1-------------------------

const sqrt = function (number) {
  return number * number;
};

const squaresOf = function (numbers) {
  return numbers.map(sqrt);
};

const numbers = [1, 2, 3, 4, 5, 6];

console.log(squaresOf(numbers));

//---------------------------Q2---------------------

const lengthOfString = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengthOfString);
};

const strings = ["apple", "banana", "kiwi"];

console.log(lengthsOf(strings));

//---------------------------Q3---------------------

const upperCase = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(upperCase);
};

console.log(uppercaseOf(strings));
console.log(uppercaseOf(["hello", "world"]));