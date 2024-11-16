"use strict"; // this line treat all code as newer version of javascript and always write on the top of the page

// both int and float number have Number datatype

let num = 21; // integer
let salary = 14.73; // floating


let flag = true; // bool
let name = "Samarth"; // string
let isLogged = null; // standalone
let sample; // undefined
// symbol => used for unique

console.table([num, salary, flag, name, isLogged, sample]);

// Primitive datatype

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt

let symbolVar = Symbol("123"); // both have same value but in real different
let symbolVar1 = Symbol("123");

console.log(symbolVar === symbolVar1); // this give me false because when we defined symbol variable with same value then it treated as differnt value

// difference between int and bigint is range and bigint have 'n' in last 

const bigNum = 287346834229293n;  // this BigInt type 

// Reference (Non-Primitive)

// Array, Objects, Function

let arr = [1, 2, 3]; // array

let obj = {   // object
  name: "Hello",
  age: 21,
};

function greeting() {  // function
  console.log("Hello sir");
}
