// You are given with a number "N", find its cube.

// Input Description:
// A positive integer is provided.

// Output Description:
// Find the cube of the number.

// Sample Input :
// 2
// Sample Output :
// 8

// Getting input via STDIN
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

  console.log(Math.pow(userInput[0],3));

  //end-here
});
