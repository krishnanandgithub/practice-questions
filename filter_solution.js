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

//--------------------------------------Q2-----------------------------

const lengthMoreThan = function (limit) {
  return function (string) {
    return string.length > limit;
  };
};

const filterLongWords = function (words) {
  return words.filter(lengthMoreThan(5));
};

const words1 = ["apple", "banana", "kiwi", "grape"];
const words2 = ["ram", "shyam", "ramn", "ramesh", "rohit anna"];

console.log(filterLongWords(words1));
console.log(filterLongWords(words2));

//-------------------------------------Q3-------------------------------

const isAbove = function (target) {
  return function (number) {
    return number > target;
  };
};

const isAdult = function (person) {
  return isAbove(18)(person.age);
};

const filterAdults = function (people) {
  return people.filter(isAdult);
};


const adults = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Aman", age: 56 },
  { name: "Ajay", age: 16 },
  { name: "Babalu", age: 18 },
];

console.log(filterAdults(adults));

//--------------------------------Q4----------------------------------

const isActive = function (person) {
  return person.active;
};

const filterActiveUsers = function (users) {
  return users.filter(isActive);
};

const users = [
  { username: "alice", active: true },
  { username: "bob", active: false }
];

console.log(filterActiveUsers(users));

//---------------------------------Q5--------------------------------

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isAbove(10));
};

const numbersGreaterThan10 = [11, 10, 9, 3, 4, 5, 21, 22, 33, 44, 12];

console.log((filterNumbersGreaterThanTen(numbersGreaterThan10)));