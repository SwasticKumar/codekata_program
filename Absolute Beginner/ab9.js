// Write a code to get the input and print it 5 times.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Output contains 5 lines with each line having the value N.

// Sample Input :
// 4
// Sample Output :
// 4
// 4
// 4
// 4
// 4

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
  for (let i = 0; i <= 4; i++) console.log(userInput[0]);

  //end-here
});
