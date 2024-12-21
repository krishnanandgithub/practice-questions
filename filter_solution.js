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

//-------------------------------Q6-----------------------------------

const isALongBook = function (book) {
  return isAbove(200)(book.pages);
};

const filterLongBooks = function (books) {
  return books.filter(isALongBook);
};

const books = [
  { title: "Book 1", pages: 150 },
  { title: "Book 2", pages: 250 },
  { title: "Book 3", pages: 200 },
  { title: "Book 4", pages: 400 },
];

console.log(filterLongBooks(books));

//--------------------------------Q7-------------------------------------

const isProfileComplete = function (user) {
  return user.profileComplete;
};

const complement = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const filterIncompleteProfiles = function (users) {
  return users.filter(complement(isProfileComplete));
};

const profileUsers = [
  { username: "alice", profileComplete: true },
  { username: "bob", profileComplete: false }
];

console.log(filterIncompleteProfiles(profileUsers));

//------------------------------------Q8----------------------------------

const isHighGrade = function (student) {
  return isAbove(80)(student.grade);
};

const filterHighGrades = function (students) {
  return students.filter(isHighGrade);
};

const studentGrades = [
  { name: "John", grade: 75 },
  { name: "Jane", grade: 85 }
];

console.log((filterHighGrades(studentGrades)));

//----------------------------------Q9----------------------------------

const isInStock = function (product) {
  return product.inStock;
};

const filterInStockProducts = function (products) {
  return products.filter(isInStock);
};

const products = [
  { product: "apple", inStock: true },
  { product: "banana", inStock: false }
];

console.log(filterInStockProducts(products));

//-----------------------------------Q10----------------------------------

const sum = function (num1, num2) {
  return num1 + num2;
};

const average = function (totalItems) {
  return function (totalAverage, product) {
    return sum(totalAverage, product.price / totalItems);
  };
};

const isBelowAveragePrice = function (averagePrice) {
  return function (product) {
    return complement(isAbove(averagePrice))(product.price);
  };

};

const filterBelowAveragePrice = function (products) {
  const totalProducts = products.length;
  const averagePrice = products.reduce(average(totalProducts), 0);
  return products.filter(isBelowAveragePrice(averagePrice));
};

const productsBelowAveragePrice = [
  { name: "item1", price: 10 },
  { name: "item2", price: 20 },
  { name: "item3", price: 5 }
];

console.log(filterBelowAveragePrice(productsBelowAveragePrice));