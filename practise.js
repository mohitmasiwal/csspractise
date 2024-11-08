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
