// Given a number N and an array of N elements ,find the Bitwise AND of the array elements.
// Input Size N <= 100000
// Sample Testcase :
// INPUT
// 4
// 4 3 2 1
// OUTPUT
// 0

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
  let a = userInput[1].split(" ");
  let ans = +a[0];
  for (let i = 0; i < +a.length; i++) {
    ans = ans & a[i];
  }
  console.log(ans);
  //end-here
});
