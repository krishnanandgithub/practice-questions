//-----------------------Q1-------------------------

const sqrt = function (number) {
  return number * number;
};

const squaresOf = function (numbers) {
  return numbers.map(sqrt);
};

const numbers = [1, 2, 3, 4, 5, 6];

console.log(squaresOf(numbers));