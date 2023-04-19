// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let headsCount = 0;
let tailsCount = 0;
while(headsCount < 11 && tailsCount < 11){
  let flip = Math.floor(Math.random()*2);
    if(flip == 0){
      console.log("Heads");
      headsCount++;
    }else{
      console.log("Tails");
      tailsCount++;
    }
      if(tailsCount == 11){
        console.log("Tails is winner")
      }else if(headsCount==11){
        console.log("Heads is winner")
      }
}