let score = "33A"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)// NaN: Not a Number



// "33" => 33
// "33abc" => NaN
// true => 1
//false => 0
//"" => false
// "string" => true


let isloggedIn = ""

let booleanisloggedIn = Boolean(isloggedIn)

console.log(booleanisloggedIn);

let someNumber = 33
let stringnumber = String(someNumber)

console.log(stringnumber);
console.log(typeof(stringnumber))
// let value = 4

// let negvalue = -value
// console.log(negvalue)

// console.log(+true)
// console.log(+"")

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);



// pre-increment &post increment:

let x = 3
y = x++
console.table([x,y])

let a  = 4
b= ++a
console.table([a,b])
