// Sample Input :
// 2
// 4
// 5
// Sample Output :
// 2 4 5

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
  let str = "";
  for (let value of userInput) {
    str = str + value + " ";
  }
  console.log(str.trim());
  //end-here
});
