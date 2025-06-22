// primitive datatypes:

// 7 types: string,number,Boolean,Null,undefined,Symbol,BigInt

// referrence/ non primitive:  Array, objects, Functions

// js is dynamically typed language ,meaning that type of a var determined during runtime, not compiletime

const name = "Souvik"
const score = 100
const scorevalue = 100.5

let emailID;

const id = Symbol('123')
const anotherid = Symbol('123')

console.table([name,score,scorevalue,emailID,id,anotherid])

console.log(id === anotherid)

let heroes = ["Ironman","Captain","Hulk"]

let myOBJ = {
    "name": "Souvik",
    "age": 19
}
console.log(heroes)
console.log(myOBJ)