// You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit.

// Note: In case of decimal values, round-off to two decimal places.

// Input Description:
// A number is provided in Celcius as the input of the program.

// Output Description:
// The output shall be the temperature converted into Fahrenheit corresponding to the input value print up to two decimal places and round off if required.

// Sample Input :
// 12
// Sample Output :
// 53.60

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

  let c = userInput[0];
  let convert = c * (9 / 5) + 32; // Formual of Fahrenheit
  console.log(convert.toFixed(2));
  //end-here
});
