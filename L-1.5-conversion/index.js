let score = "2003";

console.table([typeof score, typeof(score)]);

let value = Number(score);  // type convertion from string to integer

// if value is NaN then its type is Number
// true => 1, false => 0

console.table([typeof value, typeof(value)]);

let isLogged = 1;

console.table([typeof isLogged, typeof(isLogged)]);

let convert = Boolean(isLogged);

console.table([typeof convert, typeof(convert)]);
