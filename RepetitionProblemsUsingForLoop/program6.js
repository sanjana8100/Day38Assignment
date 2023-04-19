// Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

let number = 22;
function checkPrimeFactors(input){
let count =0;
for (var i=2 ; i < input ; i++){
  if(input % i == 0){
    count = 1;
    break;
    }
}
if(count == 0){
  console.log(input);
  return true;
}else{
 return false;
}
}

for(var i=2 ; i < number ; i++){
    if(number % i == 0){
        checkPrimeFactors(i);
    }
}