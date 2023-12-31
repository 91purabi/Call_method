//Create a function that uses call to find the maximum number in an array of numbers.

// function findMax() {
//     // Initialize max to negative infinity, so any number will be greater
//     let max = 0;
  
//     // Iterate through the arguments array using `this` as the array
//     for (let i = 0; i < this.length; i++) {
//       if (this[i] > max) {
//         max = this[i];
//       }
//     }
  
//     return max;
//   }
  
//   // Example usage
//   const numbers = [5, 12, 99, 7, 42, 31];
//   const maxNumber = findMax.call(numbers);
//   console.log("The maximum number is:", maxNumber);


//Create a function that uses call to find the mminimum number in an array of numbers.

// function findMin() {
//   let min = Infinity;

//   for(let i = 0; i < this.length;i++) {
//     if(this[i] < min) {
//       min = this[i];
//     }

//   }

//   return min;
// }
  
// const num = [7, 12, 16, 22, 9];
// const minNum = findMin.call(num);
// console.log("The min number is:", minNum);



//Create a generic multiply function that can be used with call to multiply any number by a specific factor. solution with example

function multiply(factor2) {
  return this * factor2;
}

// Example usage
const numberToMultiply = 9;
const factor1 = 9;
const result = multiply.call(numberToMultiply, factor1);
console.log(`${numberToMultiply} multiplied by ${factor1} is ${result}`);
