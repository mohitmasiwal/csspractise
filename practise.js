// Sample Array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Accessing Elements
console.log("First fruit:", fruits[0]); // Output: Apple
console.log("Last fruit:", fruits[fruits.length - 1]); // Output: Orange

// Adding Elements
fruits.push("Grapes"); // Adds "Grapes" to the end
console.log("After push:", fruits); // Output: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

fruits.unshift("Strawberry"); // Adds "Strawberry" to the beginning
console.log("After unshift:", fruits); // Output: ["Strawberry", "Apple", "Banana", "Mango", "Orange", "Grapes"]

// Removing Elements
fruits.pop(); // Removes the last element
console.log("After pop:", fruits); // Output: ["Strawberry", "Apple", "Banana", "Mango", "Orange"]

fruits.shift(); // Removes the first element
console.log("After shift:", fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Finding Index of an Element
let index = fruits.indexOf("Mango");
console.log("Index of Mango:", index); // Output: 2

// Removing a Specific Element
if (index !== -1) {
  fruits.splice(index, 1); // Removes "Mango" from the array
}
console.log("After removing Mango:", fruits); // Output: ["Apple", "Banana", "Orange"]

// Iterating Over the Array
fruits.forEach((fruit, i) => {
  console.log(`Fruit ${i + 1}: ${fruit}`);
});
// Original array
const numbers = [1, 2, 3, 4, 5];

// Mapping to create a new array with each element doubled
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Array of objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  // Extracting names using map
  const names = users.map(user => user.name);
  console.log(names); // Output: ["Alice", "Bob", "Charlie"]
  
  // Creating an array with a custom message for each user
  const userMessages = users.map(user => `${user.name} is ${user.age} years old.`);
  console.log(userMessages);
  // Output: ["Alice is 25 years old.", "Bob is 30 years old.", "Charlie is 35 years old."]
  // Original array
const grades = [65, 82, 93, 58, 77];

// Categorizing each grade
const gradeCategories = grades.map(grade => {
  if (grade >= 90) return "A";
  if (grade >= 80) return "B";
  if (grade >= 70) return "C";
  if (grade >= 60) return "D";
  return "F";
});
console.log(gradeCategories); // Output: ["D", "B", "A", "F", "C"]
// Nested array of numbers
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Adding 1 to each element in the nested arrays
  const incrementedMatrix = matrix.map(row => row.map(num => num + 1));
  console.log(incrementedMatrix);
  // Output:
  // [
  //   [2, 3, 4],
  //   [5, 6, 7],
  //   [8, 9, 10]
  // ]
  // Array of objects
const usersww = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  // Extracting names using map
  const namesww = users.map(user => user.name);
  console.log(names); // Output: ["Alice", "Bob", "Charlie"]
  
  // Creating an array with a custom message for each user
  const userMessagesww = users.map(user => `${user.name} is ${user.age} years old.`);
  console.log(userMessages);
  // Output: ["Alice is 25 years old.", "Bob is 30 years old.", "Charlie is 35 years old."]
  
  

  
