let score = "33abc";

let score2 = undefined;

console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(score2)


// "33" => 33
// "33abc" =>NaN not a number
// true => 1; false =>0

let isLoggedin = 1;


let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
// "" =>false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)