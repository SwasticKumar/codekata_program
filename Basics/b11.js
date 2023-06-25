// Given a range of 2 numbers (i.e) L and R count the number of prime numbers in the range (inclusive of L and R ).
// Input Size : L <= R <= 100000(complexity O(n) read about Sieve of Eratosthenes)
// Sample Testcase :
// INPUT
// 2 5
// OUTPUT
// 3

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
 let num=userInput[0].split(" ");
 let prime=0;
 let even=0;
 for(let i=+num[0];i<=+num[1];i++){
    if(num%i == 0){
        prime++
    //  }else if(num%i == 0){
    //     prime++
     }
 }console.log(prime);

  //end-here
});
