// You are given A = Length of a rectangle & B = breadth of a rectangle. Find its area “C”.

// (A and B are natural numbers)

// Input Description:
// The inputs are two natural numbers representing the length and the breadth of a rectangle.

// Output Description:
// Find the area of the rectangle formed by the provided input. Round off the answer to the first decimal place if required.

// Sample Input :
// 2
// 3
// Sample Output :
// 6

// Getting input via STDIN
const { log } = require("console");
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let l = userInput[0];
  let b = userInput[1];
  let area = l * b;
  console.log(area);
  //end-here
});
