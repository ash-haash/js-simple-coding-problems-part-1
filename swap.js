
let a = 5;
let b = 7;

console.log(a, b);
// a = b;
// b = a;

// using temporary variable
const temp = a;
a = b;
b = temp;
console.log(a, b);

// destructing swap
let x = 5;
let y = 7;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

