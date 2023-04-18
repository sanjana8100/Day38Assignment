// Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.

function checkMonthAndDate(date, month){
if((month >= 4) && (month <= 5)){
    if((date >= 1) && (date <= 31) && (month == 5)){
        console.log("True!!!")
    } else if((date >= 1) && (date <= 30)){
        console.log("True!!!")
    } else {
        console.log("False!!!");
    }
} else if(month == 3){
    if((date >= 20) && (date <= 31)){
        console.log("True!!!")
    } else {
        console.log("False!!!")
    }
} else if(month == 6){
    if((date >= 1) && (date <= 20)){
        console.log("True!!!")
    } else {
        console.log("False!!!")
    }
} else{
    console.log("False!!!")
}      
}

let date = 20;
let month = 4;
checkMonthAndDate(date, month);