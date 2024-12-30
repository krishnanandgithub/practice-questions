//---------------------Generic Function-------------------------//

import {
  concatStr,
  firstLetterCaptilize,
  firstLetterUncaptilize,
  groupBy,
  isEven,
  isOdd,
  lengthOfString,
  longestString,
  max,
  min,
  multiply,
  onlyVowels,
  reverseString,
  shortestString,
  sqrt,
  sum,
} from "./generic_function";

//------------------------Q1------------------------

const sumOf = function (numbers) {
  return numbers.reduce(sum, 0);
};

const numbers1 = [0, 1, 2, 3, 4, 5];
console.log(sumOf(numbers1));

//------------------------Q2------------------------

const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

const numbers2 = [1, 2, 3, 4, 5];
console.log(productOf(numbers2));

//------------------------Q3------------------------

const averageOf = function (numbers) {
  const totalSum = sumOf(numbers);
  return totalSum / numbers.length;
};

console.log(averageOf(numbers2));

//------------------------Q4------------------------

const minOf = function (numbers) {
  return numbers.reduce(min, Infinity);
};

console.log(minOf(numbers1));
console.log(minOf(numbers2));

//------------------------Q5------------------------

const maxOf = function (numbers) {
  return numbers.reduce(max, -Infinity);
};

console.log(maxOf(numbers1));
console.log(maxOf(numbers2));

//------------------------Q6------------------------

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isAbove(0)).reduce(sum, 0);
};

const mixedNumbers = [-9, 3, -2, 0, 5, -7, 1, -1];
console.log(sumPositiveNumbers(mixedNumbers));

//------------------------Q7------------------------

const sumOfSquares = function (numbers) {
  return numbers.map(sqrt).reduce(sum, 0);
};

console.log(sumOfSquares(numbers1));

//------------------------Q8------------------------

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(sum, 0);
};

console.log(sumOfOddNumbers(numbers1));

//------------------------Q9------------------------

const countNegativeNumbers = function (numbers) {
  return numbers.filter(compliment(isAbove(-1))).length;
};

console.log(countNegativeNumbers(mixedNumbers));

//------------------------Q10------------------------

const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(sqrt).reduce(sum, 0);
};

console.log(findSumOfEvenSquares(numbers1));

//------------------------Q11------------------------

const concatenateWords = function (words) {
  return words.reduce(concatStr, "");
};

const words1 = ["hello", "world"];
const words2 = ["apple", "banana", "mango"];

console.log(concatenateWords(words1));
console.log(concatenateWords(words2));

//------------------------Q12------------------------

const longestWord = function (words) {
  return words.reduce(longestString, "");
};

const words = ["apple", "banana", "cherry", "kiwi", "ab", "a"];

console.log(longestWord(words));

//------------------------Q13------------------------

const shortestWord = function (words) {
  return words.reduce(shortestString);
};

console.log(shortestWord(words));

//------------------------Q14------------------------

const joinWithComma = function (words) {
  return joinWith(",")(words);
};

console.log(joinWithComma(words));

//------------------------Q15------------------------

const reverseWords = function (words) {
  return words.reverse();
};

console.log(reverseWords(words));

//------------------------Q16-----------------------

const joinWordsWithSpace = function (words) {
  return joinWith(" ")(words);
};

console.log(joinWordsWithSpace(words));

//------------------------Q17-----------------------

const concatenateNames = function (names) {
  return joinWith("")(names);
};

console.log(concatenateNames(words));

//------------------------Q18-----------------------

const countVowelsInWords = function (words) {
  return words.map(onlyVowels).map(lengthOfString);
};

console.log(countVowelsInWords(words));

//------------------------Q19-----------------------

const makeCamelCase = function (words) {
  const pascalCase = joinWith("")(words.map(firstLetterCaptilize));
  return firstLetterUncaptilize(pascalCase);
};

const caseWords = ["hello", "world", "how", "are", "you"];
console.log(makeCamelCase(caseWords));

//------------------------Q20-----------------------

const reverseStrings = function (words) {
  return words.map(reverseString).join("");
};

console.log(reverseStrings(words));

//------------------------Q21-----------------------

const duplicateNumbers = function (numbers) {
  return numbers.reduce((duplicate, e) => [...duplicate, e, e], []);
};

const duplicateNums = [1, 2, 3, 4, 5];
console.log(duplicateNumbers(duplicateNums));

//------------------------Q22-----------------------

const concatenateArrays = function (arrays) {
  return arrays.reduce((concat, e) => [...concat, ...e], []);
};

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(concatenateArrays(arrays));

//------------------------Q23-----------------------

const flattenArray = function (arrays) {
  return arrays.flat();
};

console.log(flattenArray(arrays));

//------------------------Q24-----------------------

const uniqueNumbers = (numbers) =>
  numbers.reduce((set, e) => (set.includes(e) ? set : [...set, e]), []);

const uniqueNums = [1, 3, 2, 5, 1, 5, 3, 2, 4, 7, 4, 2, 3, 4];
console.log(uniqueNumbers(uniqueNums));

//------------------------Q25-------------------------

const groupByLength = (strings) => groupBy(strings, lengthOfString);
const groupByEvenOdd = (nums) => groupBy(nums, isEven);

const groupingWords = ["apple", "banana", "cherry", "date"];
const groupingNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(groupByLength(groupingWords));
console.log(groupByEvenOdd(groupingNums));
