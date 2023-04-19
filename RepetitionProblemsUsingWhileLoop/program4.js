// Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke 
// i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.

function gamble(money){
    let betMoney = 1;
    let goal = 200;
    let numOfBets = 0;
    let numOfWins = 0;
    let numOfLosses = 0;

    while(money < goal && money != 0){
        let bet = Math.floor(Math.random()*2);
        numOfBets++;
        if(bet == 0){
            numOfLosses++;
            money -= betMoney;
        } else {
            numOfWins++;
            money += betMoney;
        }
    }
    if(money == goal){
        console.log("You reached the goal of 200 Rupees");
    } else {
        console.log("You lost all the Money!!!")
    }
    console.log("Number of Bets: " +numOfBets);
    console.log("Number of Wins: " +numOfWins);
    console.log("Number of Losses: " +numOfLosses);
}

gamble(100);