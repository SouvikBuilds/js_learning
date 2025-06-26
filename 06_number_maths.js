const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math);

console.log(Math.abs(-45));
console.log(Math.round(4.5));
console.log(Math.ceil(4.6)); //ceil matlab upar wala value
console.log(Math.floor(4.9));//Floor matlab Niche wala value

console.log(Math.min(4, 3, 5, 6));
console.log(Math.max(4, 3, 5, 6));

console.log(Math.random());//hamesha 0 and 1 ke bich me value dega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

