// Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form

let inputVar = 11;
let harmonicNum = 0;

for( var i=1 ; i <= inputVar ; i++){
    harmonicNum += 1/i;
}

console.log("Harmonic Number = ",harmonicNum);