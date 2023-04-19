// Write a program that takes a input and determines if the number is a prime.

let input = 12;
let count = 0;

for( var i=2 ; i < input ; i++){
  if(input % i == 0){
    count = 1;
    break;
  }
}

if(count == 0){
  console.log(input," is a prime number.");
} else {
    console.log(input," is not a prime number.");
}