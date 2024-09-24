// singleton - means when we create object from construtor
const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const user = Object.create(personPrototype);
user.name = "Samarth";
console.log(user.greet()); // output - Hello, my name is Samarth

// object literals

const JsUser = {
  // object is a key value pair type of datatype
  name: "Samarth",
  age: 21,
  address: "Delhi",
};

console.log(JsUser.address); // first method to access object keys
console.log(JsUser["age"]); // second methos to access object keys

// sometimes interview ask to use symbol datatype in object and print their value

const smb = Symbol("key");

const obj = {
  firstName: "Samarth",
  lastName: "Gupta",
//   smb: "keyValue",  // this is not right approach to use Symbol datatype in objects but if you want to use then you can use this also
  [smb]: "keyValue",  // this is correct approach to use Symbol datatype in objects 
  age: 21,
};

/* {
  firstName: 'Samarth',
  lastName: 'Gupta',
  age: 21,
  [Symbol(key)]: 'keyValue'  // when we use [smb]
} */
console.log(obj)

// console.log(obj.smb)  // it print keyValue but

console.log(obj[smb]) // it also keyValue

// somtimes we don't want to make changes in our object then
const obj1 = {
    car: "Audi",
    model: 2022,
    color: "black"
}

console.log(obj1.color) // print black

obj1.color = "blue"
console.log(obj1.color)  // print blue

// if we freeze the object then whenever anyone change values in object it cannot reflect in the object
Object.freeze(obj1);

obj1.color = "black"
console.log(obj1.color) // print blue -  because we change color before freezing the object


// if we want to add function in our object then
const p = {
    height: 178,
    age: 28
}

p.greeting = function(){
    console.log("Hello Sir")
}

console.log(p.greeting())


// objects in object
const person = {
    fullName : {
        userFullName: {
            firstName: "Samarth",
            lastName: "Gupta",
        },
    },
    age: 21,
    height: 178,
    address: {
        city: "New Delhi",
    }
}

console.log(person.fullName)  // { userFullName: { firstName: 'Samarth', lastName: 'Gupta' } }
console.log(person.fullName.userFullName)  // { firstName: 'Samarth', lastName: 'Gupta' }
console.log(person.fullName.userFullName.firstName)  // Samarth

// combine two or more objects
const ob1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 4
}

const obj3 = {ob1, obj2}
console.log(obj3) // { ob1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

const ob3 = Object.assign({}, ob1, obj2);
console.log(ob3)  // { a: 1, b: 2, c: 3, d: 4 }

const obj4 = {...ob1, ...obj2} // merge two objects using spread operator
console.log(obj4)  // { a: 1, b: 2, c: 3, d: 4 }

// array of object
const users = [
    {
        id: 1,
        emmail: "test1@gmail.com"
    },
    {
        id: 2,
        email: "test2@gmail.com"
    },
    {
        id: 3,
        email: "test3@gmail.com"
    }
]

console.log(users[1].email)  // test2@gmail.com

// if we want to get all keys and values of the object
const testObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

console.log(Object.keys(testObj)) // ['a', 'b', 'c', 'd']
console.log(Object.values(testObj)) // [1, 2, 3, 4]

// you can also check key is present in the object or not
console.log(testObj.hasOwnProperty("a"))  // true
console.log(testObj.hasOwnProperty("f"))  // false 