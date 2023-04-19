// Write a program that computes a factorial of a number taken as input.
// 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

let input = 5
let factorial = 1;
for(var i = 1;i<=input;i++){
  factorial = factorial*i;
}

console.log("Factorial of ",input," = ",factorial);