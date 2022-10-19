// Checking weathr a number is prime or not.

let num = 13;
let count = 0;
for (let i = 1; i <= 13; i++) {
  if (num % i == 0) {
    count++
  }
}
if (count == 2) {
  console.log(num,"ia a prime number");
}
else {
  console.log(num,"is not a prime number");
}


// Checking weather an string is palindrome or not.

let string = "naman";

for (let i = string.length-1;i>=0;i--){

bag = bag + string[i];
}
if (string == bag){
console.log("it is palindrom")
}
else {
console.log("it is not a palindrom")
}
