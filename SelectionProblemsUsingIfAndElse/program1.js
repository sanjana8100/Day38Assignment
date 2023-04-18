// Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value.

let number1 = Math.floor(Math.random()*999);
let number2 = Math.floor(Math.random()*999);
let number3 = Math.floor(Math.random()*999);

console.log("The Maximum value of " +number1+ ", " +number2+ " and " +number3+ " is: ");
if((number1 > number2) && (number1 > number3))
    console.log(number1);
else if (number2 > number3)
    console.log(number2);
else
    console.log(number3);

console.log("The Minimum value of " +number1+ ", " +number2+ " and " +number3+ " is: ");
if((number1 < number2) && (number1 < number3))
    console.log(number1);
else if (number2 < number3)
    console.log(number2);
else
    console.log(number3);