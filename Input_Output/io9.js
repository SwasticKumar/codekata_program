// Sample Input :
// guvigeek
// Sample Output :
// g
// u
// v
// i
// g
// e
// e
// k

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

  for (let value of userInput[0].split("")) console.log(value);
  //end-here
});
