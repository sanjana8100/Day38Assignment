// Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime

function checkPrime(inputNumber){
    let c =0;
    for (var i =2;i < inputNumber; i++){
      if(inputNumber%i==0){
        c = 1;
        break;
        }
      }
      if(c==0){
        console.log(inputNumber,"is prime number");
      }else{
        console.log(inputNumber,"is not prime number");
        }
}

// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime  

function checkPalindromeAndPrime(number){
          var temp = number;
          let reverse = 0;
      while(number>0){
          let remainder = parseInt(number%10);
          reverse = reverse*10+remainder;
          number=parseInt(number/10);
      }
      if(temp==reverse){
        console.log(temp+" is palindrome number.");
        checkPrime(temp);      
      }else{
          console.log(temp+" is not palindrome number.");  
      }
}


checkPalindromeAndPrime(131)
