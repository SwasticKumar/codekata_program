// You are provided with a number, "N". Find its factorial.

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the factorial of the integer.

// Sample Input :
// 2
// Sample Output :
// 2

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
  let fact = 1;
  for (let i = 1; i <= userInput[0]; i++) {
    fact = fact * i;
  }
  console.log(fact);
  //end-here
});
