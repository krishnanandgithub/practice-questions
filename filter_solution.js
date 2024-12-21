//-----------------------------Q1-------------------------------

const isEven = function (number) {
  return (number & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

const evenNumbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers2 = [1, 3, 5, 7];
const evenNumbers3 = [0, 2, 4, 6, 8];


console.log(filterEvenNumbers(evenNumbers1));
console.log(filterEvenNumbers(evenNumbers2));
console.log(filterEvenNumbers(evenNumbers3));