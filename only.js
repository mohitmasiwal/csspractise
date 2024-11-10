const numbers = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber); // Output: true (because 8 is even)

const users = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 15 }
  ];
  
  const hasAdult = users.some(user => user.age > 18);
  
  console.log(hasAdult); // Output: true (because Bob is over 18)
  const emptyArray = [];

const result = emptyArray.some(item => item > 0);

console.log(result); // Output: false
const numbers = [3, 5, -2, 8, 10];

const hasNegative = numbers.some(num => num < 0);

console.log(hasNegative); // Output: true (because -2 is negative)


  
