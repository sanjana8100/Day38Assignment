// Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

console.log("Enter the number till that you want to print the table of 2");
let a = 10;
if(a<=37) {
    for (var i = 0; i <= a; i++) {
        var ans = 2 * i;
        console.log("2^" + i + "=" + ans);
    }
}