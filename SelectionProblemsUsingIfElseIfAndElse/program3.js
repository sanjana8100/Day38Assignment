// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

function readNumber(a) {
    if (a == 1) {
        console.log("Unit");
    } else if (a == 10) {
        console.log("Ten");
    } else if (a == 100) {
        console.log("Hundred");
    } else if (a == 1000) {
        console.log("Thousand");
    } else {
        console.log("Invalid number");
    }
}

let number = 100;
readNumber(number);