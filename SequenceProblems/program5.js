// – Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft

let inches = 1;
let feet = 12 * inches;

let answer = (42 * inches)/(feet);
console.log("42 inches = " +answer+ " feet");

// b. Rectangular Plot of 60 feet x 40 feet in meters

let lengthInFeet = 60;
let breadthInFeet = 40;

let areaInMeter = (lengthInFeet*0.3048) * (breadthInFeet*0.3048);
console.log("Rectangular Plot of 60 feet x 40 feet in meters: " +areaInMeter);

// c. Calculate area of 25 such plots in acres

let numberOfAreas = 25;

let totalAreaInAcres = (areaInMeter*0.000247105)*numberOfAreas;
console.log("Area for 25 plots = " ,totalAreaInAcres," acres");