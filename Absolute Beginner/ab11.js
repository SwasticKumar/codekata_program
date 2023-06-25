// Let "A"  be a string. Remove all the whitespaces and find it's length.

// Input Description:
// A string is provide as an input

// Output Description:
// Remove all the whitespaces and then print the length of the remaining string.

// Sample Input :
// Lorem Ipsum
// Sample Output :
// 10

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
//   let words=userInput[0].split("");
//   let count=0;
//   for(let value of words){
//     if(value===" "){
//         continue;
//     }else{
//         count++
//     }
//   }
//   console.log(count);

console.log(userInput[0].split(" ").join('').length);
  //end-here
});