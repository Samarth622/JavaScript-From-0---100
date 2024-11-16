const myArr = [1, 2, 3, 4, 5] // you can also store different datatypes element in the js array

const arr = new Array(1, 2, 3, 4, 5, 6)  // it is also declaration of the array

console.log(arr)  // it print like [1, 2, 3, 4]

// array alwayd start from 0 index
console.log(myArr[0]) // it give first element of the array

console.log(myArr.length) // it returns the length of the array
myArr.push(6) // it adds the element at the last of the array
// console.log(myArr)

myArr.pop() // it delete the last element of the array
// console.log(myArr)

myArr.unshift(-1) // it adds the element in the start of the array
// console.log(myArr)
myArr.shift()  // it delete the start value of the array
// console.log(myArr)

console.log(myArr.indexOf(2));  // it returns the index of the given element
console.log(myArr.lastIndexOf(6)) // it return the last index of the element and if element not present then -1
console.log(myArr.reverse())  // it reverse the reference array and put changes in real array [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]
console.log(myArr.includes(8));  // it returns the boolean value if value present in array or not
console.log(myArr.join())  // it convert array into string - 1,2,3,4,5

console.log("A : ", arr)

let newArr1 = arr.slice(1, 3)  // it take two arguments first - start index and second - end index
console.log(newArr1) // it print the array from index 1 to 3 where index 3 is exclusive
console.log("B : ", arr)

let newArr2 = arr.splice(1, 3)  // spilce manipulate the main array and cut the elements from index 1 to index 3 both inclusive
console.log(newArr2)  // it print array from index 1 to length 3
console.log("C : ", arr) // main array have only 3 elements left from 6 elements

const mc_heros = ["ironman", "vision", "thor"]
const dc_heros = ["wonder women", "aquaman", "flash"]

mc_heros.push(dc_heros)  // it pushs to main array not return new array

console.log(mc_heros) // Then it return an array which have another array inside it
// answer - [ 'ironman', 'vision', 'thor', [ 'wonder women', 'aquaman', 'flash' ] ]

let heros = mc_heros.concat(dc_heros)  // it return new array which have all element of first array folllowed by second array
console.log(heros) // [ 'ironman', 'vision', 'thor', 'wonder women', 'aquaman', 'flash' ]

let new_heros = [...mc_heros, ...dc_heros] // this is also one more method to concat the arrays '...' is called spread operator
console.log(new_heros);

// we have an array which have arrays inside array and we want an array when have all elements of the arrays of arrays
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10], 11], 12]
const new_flat_array = arr1.flat(2);  // flat function convert multidimension array into simgle dimension and it take single argument which is depth
// depth means how want you to go in the depth of our array to make flat

console.log(new_flat_array)  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(Array.isArray("Samarth")) // it check that the given datatype is array or not
console.log(Array.from("Samarth")) // it convert the any datatype into array type and if it can unable to convert then it return []