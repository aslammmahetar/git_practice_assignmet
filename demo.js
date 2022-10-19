// for prime number

let num = 13;
let count = 0;
for (let i = 1; i < 13; i++) {
  if (num % i == 0) {
    count++
  }
}
if (count == 0) {
  console.log("it ia an prime number")
}
else {
  console.log("Not a prime number")
}

// palindrom

let string = "naman";

for (let i = string.length-1;i>=0;i++){

bag = bag + i;
}
if (string = bag){
console.log("it is palindrom")
}
else {
console.log("it is not a palindrom")
}
