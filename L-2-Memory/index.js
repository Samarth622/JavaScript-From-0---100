// We have two memories - Stack Memory and Heap Memory

// Stack Memory is used by primitive datatypes
// Means when we assign variable to another variables then it only copies the variable value not reference

let name = "Ayush";
let name1 = name;

console.log(name); // Ayush
console.log(name1); // Ayush

name1 = "Stuti";

console.log(name); // Ayush
console.log(name1); // Stuti

// Heap Memory is used by non-primitive datatypes
// Means when we assign variable to another variable then it pass reference of the variable

let address = {
  city: "Lucknow",
  state: "UttarPradesh",
};

let address1 = address;

console.log(address.city);  // Lucknow
console.log(address1.city);  // Lucknow

address1.city = "Sitapur";

console.log(address.city);  // Sitapur
console.log(address1.city);  // Sitapur
