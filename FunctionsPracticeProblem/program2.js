// Write a function to check if the two numbers are Palindromes

function isPalindrome(num1, num2) {
    
    const str1 = num1.toString().split("").reverse().join("");
    const str2 = num2.toString().split("").reverse().join("");
    
    if (str1 === str2) {
      return console.log(num1+" "+num2+" This is palindrome");
    } else {
      return console.log(num1+" "+num2+" This is not palindrome");
    }
  }
  
console.log(isPalindrome(121, 121));
console.log(isPalindrome(123, 321)); 
console.log(isPalindrome(123, 321)); 
