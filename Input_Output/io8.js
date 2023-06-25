// Sample Input :
// 2.3 4.5 7.8
// Sample Output :
// 2.3
// 4.5
// 7.8

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

  for (let value of userInput[0].split(" ")) console.log(value);
  //end-here
});
