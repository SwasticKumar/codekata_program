// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
// Sample Testcase :
// INPUT
// 4 2
// 1 2 3 3
// OUTPUT
// yes

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
  let n = userInput[0].split(" ");
  let k = userInput[1].split(" ");
  if (k.includes(n[0]) || k.includes(n[1])) {
    console.log("yes");
  } else {
    console.log("no");
  }

  //end-here
});
