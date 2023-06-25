// Sample Input :
// 2 4
// 2 4
// 2 4
// Sample Output :
// 2 4
// 2 4
// 2 4

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

  for (let value of userInput) console.log(value);
  //end-here
});
