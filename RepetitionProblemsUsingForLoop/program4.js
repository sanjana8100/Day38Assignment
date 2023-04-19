// Extend the program to take a range of number as input and output the Prime Numbers in that range.

let x = 10;
let y = 50;
let count = 0;
for(var i=x ; i < y ; i++){
  count = 0;
  for(var j=2 ; j < i ; j++){
    if(i % j == 0){
      count = 1;
      break;
    }
  }
  if(count == 0){
  console.log(i);
  }
}