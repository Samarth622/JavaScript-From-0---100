let str = "Hello";

console.log(str + " world"); // used to concatenate strings
console.log(`${str} world`); // new way to concatenate strongs

const greeting = new String("Hello Sir") // this basically store string in the form of array of characters
/* 0 - 'H'
   1 - 'e'
   2 - 'l'... */

// Most important note is these all method cannot make changes in our original string

console.log(greeting) // it print like [String: 'Hello Sir']
console.log(greeting[0]) // it print specific character at that index
console.log(greeting.length)  // it print the length of string
console.log(greeting.substring(3, 7))  // it give substring from 3 to 7 where 3 inclusive and 7 exclusive it started from 0
console.log(str.toLowerCase()) // it convert the string into lowercase
console.log(str.toUpperCase()) // it convert the string into uppercase
console.log(str.charAt(2))  // it give character at given index
console.log(str.endsWith('o')) // it return true or false. If given char is present at the last of the string then true else false
console.log(greeting.indexOf('l'))  // it return the start index of the given character
console.log(greeting.lastIndexOf('l'))  // it return s the last index of the given character
console.log(greeting.replace("Sir", "Mam")) // it replace the particular character or string with another string
console.log(greeting.slice(2, 8)) // this function is same as substring function only main difference is it return in new string and substring return specified number of characters and also start with negative values
console.log(greeting.startsWith('H')) // it return true or false according to the given character that present in start or not

let str1 = "   hello    "
console.log(str1.trim()) // this remove extra spaces
console.log(str1.trimStart()) // this removes extra spaces from start only 
console.log(str1.trimEnd()) // this removes extra spaces from end only

let str2 = "hello-sir-how-are-you";
console.log(str2.split('-')) // it returns the array of string on the basis of '-' char in the string