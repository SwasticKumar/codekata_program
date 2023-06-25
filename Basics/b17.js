// Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'.
// Input Size : A,B,C <= 100000
// Sample Testcase :
// INPUT
// 3 4 5
// OUTPUT
// yes

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
  let a = userInput[0].split(" ");
  let scalene =
    (a[0] === a[1]) === a[2] || a[0] === a[1] || a[1] === a[2] || a[2] === a[0]
      ? "no"
      : "yes";
  console.log(scalene);

  //end-here
});
