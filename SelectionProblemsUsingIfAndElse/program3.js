// Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. 
// A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.

function checkLeapYear(inputYear){

    if(inputYear > 999 && inputYear < 10000){
        if(inputYear % 4 == 0 && inputYear % 100 != 0){
            console.log("Leap year.",inputYear)
        }else if(inputYear % 400 == 0){
            console.log("Leap year ",inputYear)
        }else{
            console.log(inputYear," is not a leap year")
        }
    }else{
        console.log("Enter 4 digit year.")
    }
}

let inputYear = 2022;
checkLeapYear(inputYear);