const num = 400

const n = new Number(300);  // object type declaration of Number type

console.log(n) // it prints like object [Number: 300]
console.log(n.toString()) // it convert the number into string
console.log(n.toExponential(3)) // it convert the number in exponetial number with points upto given argument 300 - 3.000e+2
console.log(n.toFixed(4))  // it convert integer to float value with 4 zeros after decimal


const f = 123.86343;
console.log(f.toPrecision(7)) // it round of the given number upto given argument digit

const h = 10000000;
// by default it follow US standard 
console.log(h.toLocaleString()) // it returns string with commas in the string like 1000000 -> 1,000,000
console.log(h.toLocaleString('en-IN'))  // it convert in INDIAN standard 1000000 -> 10,00,000


// +++++++++++++++++++++++++++ Math library +++++++++++++++++++++++++
let a = 21, b = 23;
console.log(a-b);  // this give me negative answer
console.log(Math.abs(a-b))  // This retrun absolute value of the operation means alwayd positive value

const number = 284.273;
console.log(Math.ceil(number)) // it returns the non decimal value which is baiscally convert the decimal part to 1 and add to integer part of the number
console.log(Math.floor(number)) // it return the interger part of the number

console.log(Math.max(27, 36, 21, 37, 28))  // it returns the maximum values among the given values
console.log(Math.min(27, 36, 21, 37, 28))  // it returns the minimum value among the given values

console.log(Math.pow(2, 4))  // it is function which find power of first argument and power is the second argument
console.log(Math.random())  // it returns random number from 0 to 1 range

// if we want random number in a given range
let min = 10, max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let nums = 183.382;
console.log(Math.round(nums))  // it round of the given floating number according to the rules of roundoff number

let d = 382;
console.log(Math.sqrt(d)) // it give me square root of the number