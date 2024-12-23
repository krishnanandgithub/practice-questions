//---------------------Generic Function-------------------------//

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

const firstLetterUncaptilize = function (string) {
  return string ? string[0].toLowerCase() + string.slice(1, string.length) : '';
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

const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};


const min = function (num1, num2) {
  return num1 < num2 ? num1 : num2;
};

const longestString = function (string, currentString) {
  return currentString.length > string.length ? currentString : string;
};

const longestStringOf = function (strings) {
  return strings.reduce(longestString, '');
};

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

const isOdd = function (num) {
  return (num & 1) === 1;
};

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

const isEven = function (num) {
  return (num & 1) === 0;
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(sqrt).reduce(sum, 0);
};

console.log(findSumOfEvenSquares(numbers1));

//------------------------Q11------------------------

const concat = function (str1, str2) {
  return str1 + str2;
};

const concatenateWords = function (words) {
  return words.reduce(concat, '');
};

const words1 = ['hello', 'world'];
const words2 = ['apple', 'banana', 'mango'];

console.log(concatenateWords(words1));
console.log(concatenateWords(words2));

//------------------------Q12------------------------

const longestWord = function (words) {
  return words.reduce(longestString, '');
};

const words = ["apple", "banana", "cherry", "kiwi", "ab", "a"];

console.log(longestWord(words));

//------------------------Q13------------------------

const shortestString = function (str1, str2) {
  return str1.length < str2.length ? str1 : str2;
};

const shortestWord = function (words) {
  return words.reduce(shortestString);
};

console.log(shortestWord(words));

//------------------------Q14------------------------

const joinWithComma = function (words) {
  return joinWith(',')(words);
};

console.log(joinWithComma(words));

//------------------------Q15------------------------

const reverseWords = function (words) {
  return words.reverse();
};

console.log(reverseWords(words));

//------------------------Q16-----------------------

const joinWordsWithSpace = function (words) {
  return joinWith(' ')(words);
};

console.log(joinWordsWithSpace(words));

//------------------------Q17-----------------------

const concatenateNames = function (names) {
  return joinWith('')(names);
};

console.log(concatenateNames(words));

//------------------------Q18-----------------------

const countVowelsInWords = function (words) {
  return words.map(onlyVowels).map(lengthOfString);
};

console.log(countVowelsInWords(words));

//------------------------Q19-----------------------

const makeCamelCase = function (words) {
  const pascalCase = joinWith('')(words.map(firstLetterCaptilize));
  return firstLetterUncaptilize(pascalCase);
};

const caseWords = ["hello", "world", "how", "are", "you"];
console.log(makeCamelCase(caseWords));

//------------------------Q20-----------------------

const reverseStrings = function (words) {
  return words.map(reverseString).join('');
};

console.log(reverseStrings(words));

//------------------------Q21-----------------------

const duplicateNumbers = function (numbers) {
  return numbers.reduce((set, e) => set.includes(e) ? set : [...set, e], []);
};

const duplicateNums = [1, 3, 2, 5, 1, 5, 3, 2, 4, 7, 4, 2, 3, 4];
console.log(duplicateNumbers(duplicateNums));