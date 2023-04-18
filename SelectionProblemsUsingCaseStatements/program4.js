// Write a program that takes User Inputs and does Unit Conversion of different Length units
// 1. Feet to Inch 

let inch = 1;
let foot = 12 * inch;

let inputFeet = 23;
console.log(inputFeet+ " feet = " +(inputFeet*foot)+ " inches");

// 2. Feet to Meter 

let meter = 1;
foot = meter / 3.281;

inputFeet = 23;
console.log(inputFeet+ " feet = " +(inputFeet*foot)+ " meters");

//3. Inch to Feet

foot = 1;
inch = foot / 12;

let inputInch = 23;
console.log(inputInch+ " inches = " +(inputInch*inch)+ " feet");

//4. Meter to Feet

foot = 1;
meter = foot * 3.28084;

let inputMeter = 23;
console.log(inputMeter+ " meters = " +(inputMeter*meter)+ " feet");
