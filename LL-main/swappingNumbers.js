let num1 = 10;
let num2 = 20;

let temp;

// 1 : swapping logic using temp variable :

//10 20
temp = num1;
num1 = num2;
num2 = temp;

console.log(`Number 1 : ${num1} & Number 2 : ${num2}`);

// 2 : swapping logic using arithmetic operators :
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(`Number 1 : ${a} & Number 2 : ${b}`);