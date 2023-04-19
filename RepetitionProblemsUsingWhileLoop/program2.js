// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

function magicNumber(number){
    let low = 1;
    let high = 100;
    let guess = 0;
    let numGuesses = 0;

    while(low <= high){
        guess = Math.floor((low + high) / 2);
        console.log("Checking if the number is between " + low + " and " + guess + "....")
        numGuesses++;
        if(number >= low && number <= guess){
            console.log("true")
            high = guess - 1;
        } else {
            console.log("false")
            low = guess + 1;
        }
    }
    console.log("Your Number is: " +guess);
    console.log("Number of Guesses: " +numGuesses);
}

magicNumber(52);