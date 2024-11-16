// 2 > 3
// 3 < 2
// 2 <= 3
// 3 >= 1
// 1 != 2

console.log(1 === "1"); // === check value as well as datatype
console.log(1 == "1"); // == check only value

// Always avoid these type of comparision in your project or at production level
// Because these are the inconsistency of the javascript language

console.log(null > 0); // false
console.log(null > 0); // false
console.log(null == 0);  // false
console.log(null >= 0);  // true
console.log(null <= 0);  // true

console.log(undefined > 0); // false
console.log(undefined > 0); // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false
console.log(undefined <= 0);  // false
