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
const numberss = [3, 5, -2, 8, 10];

const hasNegative = numbers.some(num => num < 0);

console.log(hasNegative); // Output: true (because -2 is negative)
const largeArray = Array.from({ length: 1000000 }, (_, i) => i); // Array of numbers from 0 to 999999

const hasValue = largeArray.some(num => num === 999999);

console.log(hasValue); // Output: true (found immediately without looping the entire array)
const sentence = "The quick brown fox jumps over the lazy dog.";

const hasFox = sentence.includes("fox");

console.log(hasFox); // Output: true
const text = "I like cats. Cats are cute.";

const replacedText = text.replace("cats", "dogs"); // replaces only the first "cats"
const replacedAllText = text.replaceAll("cats", "dogs"); // replaces all occurrences

console.log(replacedText);     // Output: "I like dogs. Cats are cute."
console.log(replacedAllText);  // Output: "I like dogs. Dogs are cute."
const userInput = "   Hello World!   ";

console.log(userInput.trim());       // Output: "Hello World!"
console.log(userInput.trimStart());  // Output: "Hello World!   "
console.log(userInput.trimEnd());    // Output: "   Hello World!"
const word = "Hello";

const repeated = word.repeat(3);

console.log(repeated); // Output: "HelloHelloHello"
const Calculator = (function () {
  let result = 0;

  return {
    add(value) {
      result += value;
    },
    subtract(value) {
      result -= value;
    },
    getResult() {
      return result;
    }
  };
})();

Calculator.add(10);
Calculator.subtract(5);
console.log(Calculator.getResult()); // Output: 5
class Observable {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  notify(data) {
    this.subscribers.forEach(observer => observer(data));
  }
}

const observable = new Observable();

observable.subscribe(data => console.log("Subscriber 1:", data));
observable.subscribe(data => console.log("Subscriber 2:", data));

observable.notify("Hello Observers!"); 
// Output:
// Subscriber 1: Hello Observers!
// Subscriber 2: Hello Observers!








  
